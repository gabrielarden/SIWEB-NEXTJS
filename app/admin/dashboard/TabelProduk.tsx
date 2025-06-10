'use client';

import { useEffect, useState } from 'react';

type Produk = {
  id_produk: number;
  nama_produk: string;
  harga: number;
};

export default function TabelProduk() {
  const [produk, setProduk] = useState<Produk[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/produk')
      .then((res) => res.json())
      .then((data) => {
        setProduk(data);
        setLoading(false);
      });
  }, []);

  const filteredProduk = produk.filter((p) =>
    p.nama_produk.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    const konfirmasi = confirm('Yakin ingin menghapus produk ini?');
    if (!konfirmasi) return;

    const res = await fetch(`/api/produk/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProduk(produk.filter((p) => p.id_produk !== id));
    }
  };

  const handleEdit = async (produkData: Produk) => {
    const namaBaru = prompt('Ubah nama produk:', produkData.nama_produk);
    const hargaBaru = prompt('Ubah harga produk:', produkData.harga.toString());

    if (!namaBaru || !hargaBaru) return;

    const res = await fetch(`/api/produk/${produkData.id_produk}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama_produk: namaBaru, harga: Number(hargaBaru) }),
    });

    if (res.ok) {
      setProduk((prev) =>
        prev.map((p) =>
          p.id_produk === produkData.id_produk
            ? { ...p, nama_produk: namaBaru, harga: Number(hargaBaru) }
            : p
        )
      );
    }
  };

  return (
    <>
      <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Katalog Produk</h2>
      <input
        type="text"
        placeholder="Cari nama produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: 10, marginBottom: 10, padding: 6 }}
      />
      <table border={1} cellPadding={8} style={{ width: '100%', marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID Produk</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td colSpan={4}>Loading...</td>
                </tr>
              ))
            : filteredProduk.map((p) => (
                <tr key={p.id_produk}>
                  <td>{p.id_produk}</td>
                  <td>{p.nama_produk}</td>
                  <td>Rp {p.harga.toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleEdit(p)} style={{ marginRight: 8 }}>Edit</button>
                    <button onClick={() => handleDelete(p.id_produk)} style={{ color: 'red' }}>Hapus</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}