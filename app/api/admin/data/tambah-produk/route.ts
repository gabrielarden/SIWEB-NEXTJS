import { NextRequest, NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama_produk, harga, stok, foto, deskripsi } = body;

    const produkBaru = await prisma.produk.create({
      data: {
        nama_produk,
        harga,
        stok,
        foto,
        deskripsi,
      },
    });

    return NextResponse.json(produkBaru);
  } catch (error) {
    console.error('POST Produk Error:', error);
    return NextResponse.json({ error: 'Gagal menambahkan produk' }, { status: 500 });
  }
}
