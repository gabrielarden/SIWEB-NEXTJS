import TabelProduk from './produk';
import TabelTransaksi from './transaksi';
import AnalitikDashboard from './analitik';

export default function AdminDashboardPage() {
  return (
    <main style={{ padding: 30 }}>
      <h1>Admin Dashboard</h1>
      <AnalitikDashboard />
      <hr />
      <TabelProduk />
      <hr />
      <TabelTransaksi />
    </main>
  );
}