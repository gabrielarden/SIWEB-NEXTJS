import { prisma } from "@/app/lib/prisma";

export default async function TotalProduk() {
  const total = await prisma.produk.count();
  return <span>{total}</span>;
}
