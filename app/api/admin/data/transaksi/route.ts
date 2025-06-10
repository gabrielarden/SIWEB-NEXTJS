import { NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { id_produk, nama_pembeli, tanggal, total_harga } = data;

    const transaksi = await prisma.transaksi.create({
      data: {
        id_produk,
        nama_pembeli,
        tanggal: new Date(tanggal),
        total_harga,
      },
    });

    return NextResponse.json(transaksi, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create transaksi' }, { status: 500 });
  }
}
