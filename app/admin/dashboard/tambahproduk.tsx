'use client';

import { useState } from 'react';

export default function TambahProduk() {
  const [namaProduk, setNamaProduk] = useState('');
  const [harga, setHarga] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { nama_produk: namaProduk, harga: Number(harga) };

    try {
      const res = await fetch('/api/admin/produk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to tambah produk');
      alert('Produk berhasil ditambahkan!');
      setNamaProduk('');
      setHarga('');
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <input
        type="text"
        placeholder="Nama Produk"
        value={namaProduk}
        onChange={(e) => setNamaProduk(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Harga"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Tambah Produk</button>
    </form>
  );
}
