// app/api/admin/hapus-produk/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function DELETE(req: NextRequest) {
  try {
    // Ambil query parameter id
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return NextResponse.json({ error: 'Invalid id parameter' }, { status: 400 });
    }

    // Hapus dulu transaksi yang terkait dengan produk ini
    await prisma.transaksi.deleteMany({
      where: { id_produk: idNumber },
    });

    // Hapus produk
    await prisma.produk.delete({
      where: { id_produk: idNumber },
    });

    return NextResponse.json({ message: 'Produk dan transaksi terkait berhasil dihapus' });
  } catch (error) {
    console.error('DELETE Hapus Produk Error:', error);
    return NextResponse.json({ error: 'Gagal menghapus produk' }, { status: 500 });
  }
}
