'use client';

import { useState } from 'react';

export default function TambahTransaksi() {
  const [idProduk, setIdProduk] = useState('');
  const [namaPembeli, setNamaPembeli] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [totalHarga, setTotalHarga] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id_produk: Number(idProduk),
      nama_pembeli: namaPembeli,
      tanggal,
      total_harga: Number(totalHarga),
    };

    try {
      const res = await fetch('/api/admin/transaksi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to tambah transaksi');
      alert('Transaksi berhasil ditambahkan!');
      setIdProduk('');
      setNamaPembeli('');
      setTanggal('');
      setTotalHarga('');
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <input
        type="number"
        placeholder="ID Produk"
        value={idProduk}
        onChange={(e) => setIdProduk(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nama Pembeli"
        value={namaPembeli}
        onChange={(e) => setNamaPembeli(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Tanggal"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Total Harga"
        value={totalHarga}
        onChange={(e) => setTotalHarga(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Tambah Transaksi</button>
    </form>
  );
}
