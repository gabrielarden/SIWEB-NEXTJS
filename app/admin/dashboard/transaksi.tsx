import { prisma } from "@/app/lib/prisma";

export default async function TabelTransaksi() {
  const transaksi = await prisma.transaksi.findMany({
    include: { produk: true },
    orderBy: { tanggal: 'desc' },
  });

  return (
    <>
      <h2>Riwayat Transaksi</h2>
      <table border={1} cellPadding={8} style={{ width: '100%', marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID Transaksi</th>
            <th>Nama Produk</th>
            <th>Nama Pembeli</th>
            <th>Tanggal</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {transaksi.map((t) => (
            <tr key={t.id_transaksi}>
              <td>{t.id_transaksi}</td>
              <td>{t.produk?.nama_produk}</td>
              <td>{t.nama_pembeli}</td>
              <td>{new Date(t.tanggal).toLocaleDateString()}</td>
              <td>Rp {t.total_harga.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}