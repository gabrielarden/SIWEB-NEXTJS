// /skeletons.tsx
export default function ProdukSkeleton() {
  return (
    <>
      <h2 className="animate-pulse bg-gray-300 h-8 w-48 rounded mb-4"></h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 animate-pulse">&nbsp;</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 animate-pulse">&nbsp;</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 animate-pulse">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2 animate-pulse bg-gray-300">&nbsp;</td>
              <td className="border border-gray-300 px-4 py-2 animate-pulse bg-gray-300">&nbsp;</td>
              <td className="border border-gray-300 px-4 py-2 animate-pulse bg-gray-300">&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function TransaksiTableSkeleton() {
  return (
    <table border={1} cellPadding={8} style={{ width: "100%", marginTop: 20 }}>
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
        {Array.from({ length: 5 }).map((_, i) => (
          <tr key={i}>
            {Array.from({ length: 5 }).map((_, j) => (
              <td key={j} style={{ backgroundColor: "#ccc", height: 20 }}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AnalitikSkeleton() {
  return (
    <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
      <div style={{ backgroundColor: "#ccc", height: 100, width: 150, borderRadius: 8 }} />
      <div style={{ backgroundColor: "#ccc", height: 100, width: 150, borderRadius: 8 }} />
      <div style={{ backgroundColor: "#ccc", height: 100, width: 150, borderRadius: 8 }} />
    </div>
  );
}
