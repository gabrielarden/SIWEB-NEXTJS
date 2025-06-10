import { NextRequest, NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id_transaksi, id_produk, nama_pembeli,  total_harga } = body;

    if (!id_transaksi || !id_produk || !nama_pembeli ||  !total_harga) {
      return NextResponse.json({ error: 'Semua field harus diisi' }, { status: 400 });
    }

    const transaksiUpdated = await prisma.transaksi.update({
      where: { id_transaksi },
      data: {
        id_produk,
        nama_pembeli,
        total_harga,
      },
    });

    return NextResponse.json(transaksiUpdated);
  } catch (error) {
    console.error('PUT Edit Transaksi Error:', error);
    return NextResponse.json({ error: 'Gagal mengupdate transaksi' }, { status: 500 });
  }
}
