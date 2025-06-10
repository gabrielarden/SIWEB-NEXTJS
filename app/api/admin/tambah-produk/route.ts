import { NextRequest, NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { nama_produk, harga } = body;

    // Validasi sederhana
    if (!nama_produk || !harga) {
      return NextResponse.json({ error: 'Nama produk dan harga wajib diisi' }, { status: 400 });
    }

    const produkBaru = await prisma.produk.create({
      data: {
        nama_produk,
        harga: Number(harga),
      },
      select: {
        id_produk: true,
        nama_produk: true,
        harga: true,
      },
    });

    return NextResponse.json(produkBaru);
  } catch (error: any) {
    console.error('POST Produk Error:', error.message, error.stack);
    return NextResponse.json({ error: 'Gagal menambahkan produk' }, { status: 500 });
  }
}
