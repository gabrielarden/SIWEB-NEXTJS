import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id_produk, nama_pembeli, tanggal, total_harga } = body;

    const transaksiBaru = await prisma.transaksi.create({
      data: {
        id_produk,
        nama_pembeli,
        tanggal: new Date(),
        total_harga,
      },
    });

    return NextResponse.json(transaksiBaru);
  } catch (error) {
    console.error('POST Transaksi Error:', error);
    return NextResponse.json({ error: 'Gagal menambahkan transaksi' }, { status: 500 });
  }
}
