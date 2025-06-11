'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  TrashIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { StatCardSkeleton } from './StatCardSkeleton';
import AdminProfile from '@/app/admin/dashboard/components/AdminProfile';
import PenjualanChart from '@/app/admin/dashboard/components/PenjualanChart';
import SidebarItem from '@/app/admin/dashboard/components/SidebarItem';
import { StatCard } from '@/app/admin/dashboard/components/Statcard';

interface Produk {
  id_produk: number;
  nama_produk: string;
  harga: number;
}

interface Transaksi {
  id_transaksi: number;
  id_produk: number;
  nama_pembeli: string;
  tanggal: string;
  total_harga: number;
}

type MenuKey = 'dashboard' | 'produk' | 'transaksi' | 'profile';

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>('dashboard');
  const [produk, setProduk] = useState<Produk[]>([]);
  const [transaksi, setTransaksi] = useState<Transaksi[]>([]);
  const [loadingProduk, setLoadingProduk] = useState(true);
  const [loadingTransaksi, setLoadingTransaksi] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  const [formProduk, setFormProduk] = useState({ nama_produk: '', harga: '' });
  const [formTransaksi, setFormTransaksi] = useState({
    id_produk: '',
    nama_pembeli: '',
    total_harga: '',
  });

  const [searchProduk, setSearchProduk] = useState('');
  const [searchTransaksi, setSearchTransaksi] = useState('');

  const [editProdukId, setEditProdukId] = useState<number | null>(null);
  const [editProdukForm, setEditProdukForm] = useState({ nama_produk: '', harga: '' });

  const [editTransaksiId, setEditTransaksiId] = useState<number | null>(null);
  const [editTransaksiForm, setEditTransaksiForm] = useState({ 
    id_produk: '', 
    nama_pembeli: '', 
    total_harga: '' 
  });

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoadingStats(false), 2000);
  }, []);

  useEffect(() => {
    const savedMenu = localStorage.getItem('activeMenu') as MenuKey | null;
    if (savedMenu) setActiveMenu(savedMenu);
  }, []);

  useEffect(() => {
    localStorage.setItem('activeMenu', activeMenu);
  }, [activeMenu]);

  async function fetchData() {
    setLoadingProduk(true);
    setLoadingTransaksi(true);
    try {
      const res = await fetch('/api/admin/data');
      const data = await res.json();
      setProduk(data.produk || []);
      setTransaksi(data.transaksi || []);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoadingProduk(false);
      setLoadingTransaksi(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Fungsi-fungsi handler untuk produk dan transaksi
  async function handleAddProduk() {
    if (!formProduk.nama_produk || !formProduk.harga) {
      alert('Isi form produk dulu!');
      return;
    }
    await fetch('/api/admin/tambah-produk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama_produk: formProduk.nama_produk,
        harga: Number(formProduk.harga),
      }),
    });
    setFormProduk({ nama_produk: '', harga: '' });
    fetchData();
  }

  async function handleDeleteProduk(id: number) {
    if (!confirm('Yakin ingin menghapus produk ini?')) return;
    await fetch(`/api/admin/hapus-produk?id=${id}`, { method: 'DELETE' });
    fetchData();
  }

  function handleEditProduk(id: number) {
    const item = produk.find(p => p.id_produk === id);
    if (!item) return;
    setEditProdukId(id);
    setEditProdukForm({ nama_produk: item.nama_produk, harga: item.harga.toString() });
  }

  async function handleUpdateProduk() {
    if (!editProdukId) return;
    await fetch('/api/admin/edit-produk', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_produk: editProdukId,
        nama_produk: editProdukForm.nama_produk,
        harga: Number(editProdukForm.harga),
      }),
    });
    setEditProdukId(null);
    fetchData();
  }

  async function handleAddTransaksi() {
    if (!formTransaksi.id_produk || !formTransaksi.nama_pembeli || !formTransaksi.total_harga) {
      alert('Isi form transaksi dulu!');
      return;
    }
    await fetch('/api/admin/tambah-transaksi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_produk: Number(formTransaksi.id_produk),
        nama_pembeli: formTransaksi.nama_pembeli,
        total_harga: Number(formTransaksi.total_harga),
      }),
    });
    setFormTransaksi({ id_produk: '', nama_pembeli: '', total_harga: '' });
    fetchData();
  }

  async function handleDeleteTransaksi(id: number) {
    if (!confirm('Yakin ingin menghapus transaksi ini?')) return;
    await fetch(`/api/admin/hapus-transaksi?id=${id}`, { method: 'DELETE' });
    fetchData();
  }

  function handleEditTransaksi(id: number) {
    const item = transaksi.find(t => t.id_transaksi === id);
    if (!item) return;
    setEditTransaksiId(id);
    setEditTransaksiForm({
      id_produk: item.id_produk.toString(),
      nama_pembeli: item.nama_pembeli,
      total_harga: item.total_harga.toString(),
    });
  }

  async function handleUpdateTransaksi() {
    if (!editTransaksiId) return;
    await fetch('/api/admin/edit-transaksi', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_transaksi: editTransaksiId,
        ...editTransaksiForm,
        id_produk: Number(editTransaksiForm.id_produk),
        total_harga: Number(editTransaksiForm.total_harga),
      }),
    });
    setEditTransaksiId(null);
    fetchData();
  }

  const filteredProduk = produk.filter(p =>
    p.nama_produk.toLowerCase().includes(searchProduk.toLowerCase())
  );

  const filteredTransaksi = transaksi.filter(t =>
    t.nama_pembeli.toLowerCase().includes(searchTransaksi.toLowerCase())
  );

  const totalProduk = produk.length;
  const totalTransaksi = transaksi.length;
  const totalRevenue = transaksi.reduce((sum, t) => sum + t.total_harga, 0);

  const produkTerlaris = (() => {
    const counts: Record<number, number> = {};
    transaksi.forEach(t => {
      counts[t.id_produk] = (counts[t.id_produk] || 0) + 1;
    });
    const max = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    if (!max) return '-';
    const idTerlaris = Number(max[0]);
    const prod = produk.find(p => p.id_produk === idTerlaris);
    return prod?.nama_produk || '-';
  })();

  const chartData = (() => {
    const map: Record<string, number> = {};
    transaksi.forEach(t => {
      const bulan = new Date(t.tanggal).toLocaleString('id-ID', { month: 'short', year: 'numeric' });
      map[bulan] = (map[bulan] || 0) + t.total_harga;
    });
    return Object.entries(map).map(([bulan, total]) => ({ bulan, total }));
  })();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col">
        <div className="px-6 py-4 font-bold text-pink-600 text-xl border-b border-gray-700">BOUQUETS HUB</div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <SidebarItem 
            icon={<HomeIcon className="w-6 h-6" />} 
            label="Dashboard" 
            active={activeMenu === 'dashboard'} 
            onClick={() => setActiveMenu('dashboard')} 
          />
          <SidebarItem 
            icon={<ShoppingBagIcon className="w-6 h-6" />} 
            label="Produk" 
            active={activeMenu === 'produk'} 
            onClick={() => setActiveMenu('produk')} 
          />
          <SidebarItem 
            icon={<CurrencyDollarIcon className="w-6 h-6" />} 
            label="Transaksi" 
            active={activeMenu === 'transaksi'} 
            onClick={() => setActiveMenu('transaksi')} 
          />
          <SidebarItem 
            icon={<HeartIcon className="w-6 h-6" />} 
            label="Profile" 
            active={activeMenu === 'profile'} 
            onClick={() => setActiveMenu('profile')} 
          />
        </nav>
        <button
          className="px-6 py-3 text-pink-600 hover:bg-gray-800 border-t border-gray-700 flex items-center space-x-2"
          onClick={() => {
            localStorage.clear();
            router.push('/');
          }}
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {activeMenu === 'profile' && <AdminProfile />}

        {activeMenu === 'dashboard' && (
          <div className="p-6 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {loadingStats ? (
              <div className="grid grid-cols-4 gap-4 mb-4">
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <StatCard label="Total Views" value={3456} />
                  <StatCard label="Total Profit" value={totalRevenue} />
                  <StatCard label="Total Produk" value={totalProduk} />
                  <StatCard label="Total Users" value={3456} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <p className="text-sm mb-2">
                      <strong>Total Revenue:</strong> Rp {totalRevenue.toLocaleString()}
                    </p>
                    <p className="text-sm">
                      <strong>Produk Terlaris:</strong> {produkTerlaris}
                    </p>
                  </div>

                  <div className="col-span-4 bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Grafik Penjualan</h2>
                    <div className="h-60">
                      <PenjualanChart data={chartData} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeMenu === 'produk' && (
          <div className="p-6 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Manajemen Produk</h1>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchProduk}
                onChange={(e) => setSearchProduk(e.target.value)}
                className="border p-2 rounded w-full max-w-md"
              />
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Nama Produk"
                value={editProdukId ? editProdukForm.nama_produk : formProduk.nama_produk}
                onChange={(e) =>
                  editProdukId
                    ? setEditProdukForm({ ...editProdukForm, nama_produk: e.target.value })
                    : setFormProduk({ ...formProduk, nama_produk: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Harga"
                value={editProdukId ? editProdukForm.harga : formProduk.harga}
                onChange={(e) =>
                  editProdukId
                    ? setEditProdukForm({ ...editProdukForm, harga: e.target.value })
                    : setFormProduk({ ...formProduk, harga: e.target.value })
                }
                className="border p-2 rounded"
              />
              <button
                onClick={editProdukId ? handleUpdateProduk : handleAddProduk}
                className="bg-pink-500 text-white px-4 py-2 rounded"
              >
                {editProdukId ? 'Simpan' : 'Tambah'}
              </button>
            </div>

            <div className="overflow-x-auto bg-white rounded shadow">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Nama Produk</th>
                    <th className="border px-4 py-2">Harga</th>
                    <th className="border px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProduk.map((p) => (
                    <tr key={p.id_produk}>
                      <td className="border px-4 py-2">{p.nama_produk}</td>
                      <td className="border px-4 py-2">Rp {p.harga.toLocaleString('id-ID')}</td>
                      <td className="border px-4 py-2 flex gap-2 justify-center">
                        <button 
                          onClick={() => handleEditProduk(p.id_produk)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <PencilSquareIcon className="h-5 w-5 text-blue-600" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProduk(p.id_produk)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <TrashIcon className="h-5 w-5 text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeMenu === 'transaksi' && (
          <div className="p-6 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Riwayat Transaksi</h1>
            
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Cari pembeli..."
                value={searchTransaksi}
                onChange={(e) => setSearchTransaksi(e.target.value)}
                className="border p-2 rounded w-full max-w-md"
              />
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              {editTransaksiId ? (
                <>
                  <input
                    type="number"
                    placeholder="ID Produk"
                    value={editTransaksiForm.id_produk}
                    onChange={(e) => setEditTransaksiForm({ ...editTransaksiForm, id_produk: e.target.value })}
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Nama Pembeli"
                    value={editTransaksiForm.nama_pembeli}
                    onChange={(e) => setEditTransaksiForm({ ...editTransaksiForm, nama_pembeli: e.target.value })}
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Total Harga"
                    value={editTransaksiForm.total_harga}
                    onChange={(e) => setEditTransaksiForm({ ...editTransaksiForm, total_harga: e.target.value })}
                    className="border p-2 rounded"
                  />
                </>
              ) : (
                <>
                  <select
                    value={formTransaksi.id_produk}
                    onChange={(e) => {
                      const selectedId = e.target.value;
                      const selectedProduk = produk.find((p) => p.id_produk.toString() === selectedId);
                      setFormTransaksi({
                        ...formTransaksi,
                        id_produk: selectedId,
                        total_harga: selectedProduk ? selectedProduk.harga.toString() : '',
                      });
                    }}
                    className="border p-2 rounded"
                  >
                    <option value="">Pilih Produk</option>
                    {produk.map((p) => (
                      <option key={p.id_produk} value={p.id_produk}>
                        {p.nama_produk} - Rp {p.harga.toLocaleString('id-ID')}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Nama Pembeli"
                    value={formTransaksi.nama_pembeli}
                    onChange={(e) => setFormTransaksi({ ...formTransaksi, nama_pembeli: e.target.value })}
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Total Harga"
                    value={formTransaksi.total_harga}
                    readOnly
                    className="border p-2 rounded bg-gray-100"
                  />
                </>
              )}
              <button
                onClick={editTransaksiId ? handleUpdateTransaksi : handleAddTransaksi}
                className="bg-pink-500 text-white px-4 py-2 rounded"
              >
                {editTransaksiId ? 'Simpan' : 'Tambah'}
              </button>
            </div>

            <div className="overflow-x-auto bg-white rounded shadow">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">ID Produk</th>
                    <th className="border px-4 py-2">Nama Pembeli</th>
                    <th className="border px-4 py-2">Total Harga</th>
                    <th className="border px-4 py-2">Tanggal</th>
                    <th className="border px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransaksi.map((t) => (
                    <tr key={t.id_transaksi}>
                      <td className="border px-4 py-2">{t.id_produk}</td>
                      <td className="border px-4 py-2">{t.nama_pembeli}</td>
                      <td className="border px-4 py-2">Rp {t.total_harga.toLocaleString('id-ID')}</td>
                      <td className="border px-4 py-2">{new Date(t.tanggal).toLocaleDateString('id-ID')}</td>
                      <td className="border px-4 py-2 flex gap-2 justify-center">
                        <button 
                          onClick={() => handleEditTransaksi(t.id_transaksi)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <PencilSquareIcon className="h-5 w-5 text-blue-600" />
                        </button>
                        <button 
                          onClick={() => handleDeleteTransaksi(t.id_transaksi)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <TrashIcon className="h-5 w-5 text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}