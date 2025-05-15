import { prisma } from "@/app/lib/prisma";

export default async function AnalitikDashboard() {
  const totalProduk = await prisma.produk.count();
  const totalRevenue = await prisma.transaksi.aggregate({
    _sum: { total_harga: true },
  });

  const terlaris = await prisma.transaksi.groupBy({
    by: ['id_produk'],
    _count: { id_produk: true },
    orderBy: { _count: { id_produk: 'desc' } },
    take: 1,
  });

  const produk = await prisma.produk.findUnique({
    where: { id_produk: terlaris[0]?.id_produk ?? 0 },
  });

  return (
    <>
      <h2>Analitik</h2>
      <ul>
        <li>Total Produk: {totalProduk}</li>
        <li>Total Revenue: Rp {totalRevenue._sum.total_harga?.toLocaleString()}</li>
        <li>Produk Terlaris: {produk?.nama_produk ?? '-'}</li>
      </ul>
    </>
  );
}