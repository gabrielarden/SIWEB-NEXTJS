import { NextRequest, NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id_produk, nama_produk, harga } = body;

    // Validasi input
    if (!id_produk) {
      return NextResponse.json({ error: 'ID produk wajib diisi' }, { status: 400 });
    }
    if (!nama_produk && !harga) {
      return NextResponse.json({ error: 'Minimal salah satu field (nama_produk atau harga) harus diisi' }, { status: 400 });
    }

    // Cek apakah produk ada di database
    const produkLama = await prisma.produk.findUnique({
      where: { id_produk },
    });
    if (!produkLama) {
      return NextResponse.json({ error: 'Produk tidak ditemukan' }, { status: 404 });
    }

    // Update produk
    const produkUpdate = await prisma.produk.update({
      where: { id_produk },
      data: {
        ...(nama_produk !== undefined ? { nama_produk } : {}),
        ...(harga !== undefined ? { harga: Number(harga) } : {}),
      },
      select: {
        id_produk: true,
        nama_produk: true,
        harga: true,
      },
    });

    return NextResponse.json(produkUpdate);
  } catch (error: any) {
    console.error('PUT Produk Error:', error.message, error.stack);
    return NextResponse.json({ error: 'Gagal mengupdate produk' }, { status: 500 });
  }
}
