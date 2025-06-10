"use client";

import { useEffect, useState } from "react";

export default function TotalRevenue() {
  const [revenue, setRevenue] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/analytics/total-revenue")
      .then((res) => res.json())
      .then((data) => setRevenue(data.totalRevenue))
      .catch(() => setRevenue(0));
  }, []);

  if (revenue === null) return null;

  return <span>Rp {revenue.toLocaleString("id-ID")}</span>;
}

