'use client';

import { useState, useEffect } from 'react';
import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type MenuKey = 'dashboard' | 'produk' | 'transaksi';

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

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>('dashboard');
  const [produk, setProduk] = useState<Produk[]>([]);
  const [transaksi, setTransaksi] = useState<Transaksi[]>([]);
  const [loadingProduk, setLoadingProduk] = useState(true);
  const [loadingTransaksi, setLoadingTransaksi] = useState(true);

  const [formProduk, setFormProduk] = useState({ nama_produk: '', harga: '' });
  const [formTransaksi, setFormTransaksi] = useState({
    id_produk: '',
    nama_pembeli: '',
    total_harga: '',
  });

  // Load active menu dari localStorage
  useEffect(() => {
    const savedMenu = localStorage.getItem('activeMenu') as MenuKey | null;
    if (savedMenu) setActiveMenu(savedMenu);
  }, []);

  // Simpan active menu ke localStorage kalau berubah
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

  // Kalkulasi statistik dan grafik
  const totalProduk = produk.length;
  const totalTransaksi = transaksi.length;
  const totalRevenue = transaksi.reduce((sum, t) => sum + t.total_harga, 0);

  // Cari produk terlaris
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

  // Data grafik pendapatan per bulan
  const chartData = (() => {
    const map: Record<string, number> = {};
    transaksi.forEach(t => {
      const bulan = new Date(t.tanggal).toLocaleString('id-ID', { month: 'short', year: 'numeric' });
      map[bulan] = (map[bulan] || 0) + t.total_harga;
    });
    return Object.entries(map).map(([bulan, total]) => ({ bulan, total }));
  })();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col">
        <div className="px-6 py-4 font-bold text-pink-600 text-xl border-b border-gray-700">BOUQUETS HUB</div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          <SidebarItem icon={<HomeIcon className="w-6 h-6" />} label="Dashboard" active={activeMenu === 'dashboard'} onClick={() => setActiveMenu('dashboard')} />
          <SidebarItem icon={<ShoppingBagIcon className="w-6 h-6" />} label="Produk" active={activeMenu === 'produk'} onClick={() => setActiveMenu('produk')} />
          <SidebarItem icon={<CurrencyDollarIcon className="w-6 h-6" />} label="Transaksi" active={activeMenu === 'transaksi'} onClick={() => setActiveMenu('transaksi')} />
        </nav>
        <button
          className="px-6 py-3 text-pink-600 hover:bg-gray-800 border-t border-gray-700 flex items-center space-x-2"
          onClick={() => alert('Logout')}
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 capitalize">{activeMenu}</h1>

        {activeMenu === 'dashboard' && (
          <>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <StatCard label="Total Views" value={3456} />
              <StatCard label="Total Profit" value={totalRevenue} />
              <StatCard label="Total Produk" value={totalProduk} />
              <StatCard label="Total Users" value={3456} />
            </div>

            <div className="bg-white p-4 rounded shadow mb-4">
              <p>Total Revenue: Rp {totalRevenue.toLocaleString()}</p>
              <p>Produk Terlaris: {produkTerlaris}</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold mb-2">Grafik Penjualan</h2>
              <PenjualanChart data={chartData} />
            </div>
          </>
        )}

        {activeMenu === 'produk' && (
          <>
            <div className="bg-white p-4 mb-4 rounded shadow">
              <h2 className="font-bold mb-2">Tambah Produk</h2>
              <input
                className="border p-2 mr-2"
                placeholder="Nama Produk"
                value={formProduk.nama_produk}
                onChange={(e) => setFormProduk({ ...formProduk, nama_produk: e.target.value })}
              />
              <input
                className="border p-2 mr-2"
                placeholder="Harga"
                type="number"
                value={formProduk.harga}
                onChange={(e) => setFormProduk({ ...formProduk, harga: e.target.value })}
              />
              <button className="bg-pink-600 text-white px-4 py-2" onClick={handleAddProduk}>
                Tambah
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow overflow-auto max-h-[500px]">
              {loadingProduk ? (
                <SkeletonTable columns={['ID', 'Nama', 'Harga']} rows={5} />
              ) : (
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Nama</th>
                      <th className="border px-4 py-2">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produk.map((p) => (
                      <tr key={p.id_produk}>
                        <td className="border px-4 py-2">{p.id_produk}</td>
                        <td className="border px-4 py-2">{p.nama_produk}</td>
                        <td className="border px-4 py-2">Rp {p.harga.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {activeMenu === 'transaksi' && (
          <>
            <div className="bg-white p-4 mb-4 rounded shadow">
              <h2 className="font-bold mb-2">Tambah Transaksi</h2>
              <input
                className="border p-2 mr-2"
                placeholder="ID Produk"
                value={formTransaksi.id_produk}
                onChange={(e) => setFormTransaksi({ ...formTransaksi, id_produk: e.target.value })}
              />
              <input
                className="border p-2 mr-2"
                placeholder="Nama Pembeli"
                value={formTransaksi.nama_pembeli}
                onChange={(e) => setFormTransaksi({ ...formTransaksi, nama_pembeli: e.target.value })}
              />
              <input
                className="border p-2 mr-2"
                placeholder="Total Harga"
                type="number"
                value={formTransaksi.total_harga}
                onChange={(e) => setFormTransaksi({ ...formTransaksi, total_harga: e.target.value })}
              />
              <button className="bg-pink-600 text-white px-4 py-2" onClick={handleAddTransaksi}>
                Tambah
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow overflow-auto max-h-[500px]">
              {loadingTransaksi ? (
                <SkeletonTable columns={['ID', 'Produk', 'Pembeli', 'Tanggal', 'Total']} rows={5} />
              ) : (
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Produk</th>
                      <th className="border px-4 py-2">Pembeli</th>
                      <th className="border px-4 py-2">Tanggal</th>
                      <th className="border px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaksi.map((t) => (
                      <tr key={t.id_transaksi}>
                        <td className="border px-4 py-2">{t.id_transaksi}</td>
                        <td className="border px-4 py-2">{t.id_produk}</td>
                        <td className="border px-4 py-2">{t.nama_pembeli}</td>
                        <td className="border px-4 py-2">{t.tanggal}</td>
                        <td className="border px-4 py-2">Rp {t.total_harga.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2 rounded hover:bg-gray-700 transition ${
        active ? 'bg-pink-600 text-white' : 'text-gray-300'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </button>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <div className="text-2xl font-bold">{value.toLocaleString()}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
}

function PenjualanChart({ data }: { data: { bulan: string; total: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bulan" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#ec4899" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function SkeletonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: number;
}) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((col) => (
            <th key={col} className="border px-4 py-2 animate-pulse bg-gray-300 text-transparent">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(rows)].map((_, i) => (
          <tr key={i}>
            {columns.map((col, idx) => (
              <td
                key={col + idx}
                className="border px-4 py-2 animate-pulse bg-gray-300 text-transparent"
              >
                loading
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
