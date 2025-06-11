import { prisma } from "@/app/lib/prisma";

export default async function KatalogProduk() {
  const produk = await prisma.produk.findMany();

  return (
    <main style={{ padding: 20 }}>
      <h1>Katalog Produk</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {produk.map((item: any) => (
          <div key={item.id_produk} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
            <h2>{item.nama_produk}</h2>
            <p><strong>Rp {item.harga.toLocaleString()}</strong></p>
          </div>
        ))}
      </div>
    </main>
  );
}