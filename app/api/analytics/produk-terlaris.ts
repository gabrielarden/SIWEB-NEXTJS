import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const terlaris = await prisma.transaksi.groupBy({
    by: ['id_produk'],
    _count: { id_produk: true },
    orderBy: { _count: { id_produk: 'desc' } },
    take: 1,
  });

  const idProduk = terlaris[0]?.id_produk;

  if (!idProduk) {
    return NextResponse.json({ namaProduk: "-" });
  }

  const produk = await prisma.produk.findUnique({
    where: { id_produk: idProduk },
  });

  return NextResponse.json({ namaProduk: produk?.nama_produk ?? "-" });
}
