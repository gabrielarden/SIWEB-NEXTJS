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

  useEffect(() => {
    fetch('/api/produk')
      .then((res) => res.json())
      .then((data) => {
        setProduk(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Katalog Produk</h2>
      <table border={1} cellPadding={8} style={{ width: '100%', marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID Produk</th>
            <th>Nama Produk</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ background: '#e5e7eb', height: 14, width: 50, borderRadius: 4 }}></div>
                  </td>
                  <td>
                    <div style={{ background: '#e5e7eb', height: 14, width: 120, borderRadius: 4 }}></div>
                  </td>
                  <td>
                    <div style={{ background: '#e5e7eb', height: 14, width: 80, borderRadius: 4 }}></div>
                  </td>
                </tr>
              ))
            : produk.map((p) => (
                <tr key={p.id_produk}>
                  <td>{p.id_produk}</td>
                  <td>{p.nama_produk}</td>
                  <td>Rp {p.harga.toLocaleString()}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}
