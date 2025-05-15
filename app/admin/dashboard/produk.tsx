import { prisma } from "@/app/lib/prisma";

export default async function TabelProduk() {
  const produk = await prisma.produk.findMany({
    select: {
      id_produk: true,
      nama_produk: true,
      harga: true,
    },
  });

  return (
    <>
      <h2>Katalog Produk</h2>
      <table border={1} cellPadding={8} style={{ width: '100%', marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID Produk</th>
            <th>Nama Produk</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((p) => (
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