// app/api/admin/hapus-transaksi/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return NextResponse.json({ error: 'Invalid id parameter' }, { status: 400 });
    }

    await prisma.transaksi.delete({
      where: { id_transaksi: idNumber },
    });

    return NextResponse.json({ message: 'Transaksi berhasil dihapus' });
  } catch (error) {
    console.error('DELETE Hapus Transaksi Error:', error);
    return NextResponse.json({ error: 'Gagal menghapus transaksi' }, { status: 500 });
  }
}
