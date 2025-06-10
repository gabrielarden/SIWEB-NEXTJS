"use client";

import { useEffect, useState } from "react";

export default function ProdukTerlaris() {
  const [produk, setProduk] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/analytics/produk-terlaris")
      .then((res) => res.json())
      .then((data) => setProduk(data.namaProduk))
      .catch(() => setProduk("-"));
  }, []);

  if (produk === null) return null;

  return <span>{produk}</span>;
}

