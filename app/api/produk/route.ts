import { NextResponse} from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET() {
  const produk = await prisma.produk.findMany();
  return NextResponse.json(produk);
}