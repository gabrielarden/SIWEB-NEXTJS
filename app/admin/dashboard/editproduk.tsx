'use client';

import { useState } from 'react';

interface EditProdukProps {
  id_produk: string;
  initialNamaProduk: string;
  initialHarga: number;
  onUpdate?: (data: { id_produk: string; nama_produk: string; harga: number }) => void; // opsional callback setelah update
}

export default function EditProduk({ id_produk, initialNamaProduk, initialHarga, onUpdate }: EditProdukProps) {
  const [namaProduk, setNamaProduk] = useState(initialNamaProduk);
  const [harga, setHarga] = useState(initialHarga.toString());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!namaProduk.trim() || !harga.trim()) {
      alert('Nama produk dan harga wajib diisi');
      return;
    }

    setLoading(true);

    try {
      const data = { id_produk, nama_produk: namaProduk, harga: Number(harga) };

      const res = await fetch('/api/admin/produk', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Gagal mengupdate produk');
      }

      const updatedProduk = await res.json();

      alert('Produk berhasil diupdate!');
      if (onUpdate) onUpdate(updatedProduk);
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setLoading(false);
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
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Menyimpan...' : 'Update Produk'}
      </button>
    </form>
  );
}
