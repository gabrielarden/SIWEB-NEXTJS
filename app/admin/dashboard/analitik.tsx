import React, { Suspense } from "react";
import TotalProduk from "./TotalProduk"; // server component
import TotalRevenue from "./TotalRevenue"; // client component
import ProdukTerlaris from "./ProdukTerlaris"; // client component

export default function AnalitikDashboard() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Analitik</h2>
      <ul className="space-y-2">
        <li>
          <strong>Total Produk:</strong> <TotalProduk />
        </li>
        <li>
          <strong>Total Revenue:</strong>{" "}
          <Suspense fallback={<span>Loading revenue...</span>}>
            <TotalRevenue />
          </Suspense>
        </li>
        <li>
          <strong>Produk Terlaris:</strong>{" "}
          <Suspense fallback={<span>Loading produk terlaris...</span>}>
            <ProdukTerlaris />
          </Suspense>
        </li>
      </ul>
    </>
  );
}
