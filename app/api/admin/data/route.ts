import { NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma'; // Pastikan path ini sesuai

export async function GET() {
  try {
    const produk = await prisma.produk.findMany();
    const transaksi = await prisma.transaksi.findMany();

    return NextResponse.json({ produk, transaksi });
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
