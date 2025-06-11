import { NextResponse } from 'next/server';
import { prisma } from 'app/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nama_produk, harga } = data;

    const produk = await prisma.produk.create({
      data: { nama_produk, harga },
    });

    return NextResponse.json(produk, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create produk' }, { status: 500 });
  }
}
export async function GET() {
  try {
    const produk = await prisma.produk.findMany({
      select: {
        id_produk: true,
        nama_produk: true,
        harga: true,
        foto: true
      },
    });

    return NextResponse.json(produk);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch produk' }, { status: 500 });
  }
}
