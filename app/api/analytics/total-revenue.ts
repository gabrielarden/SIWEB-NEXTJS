import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const result = await prisma.transaksi.aggregate({
    _sum: { total_harga: true },
  });

  return NextResponse.json({
    totalRevenue: result._sum.total_harga ?? 0,
  });
}
