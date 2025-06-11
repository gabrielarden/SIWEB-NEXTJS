// File: app/api/customer/data/katalog/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma"; // Pastikan path ini sesuai

export async function GET(req: NextRequest) {
  try {
    const products = await prisma.produk.findMany();
    return Response.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}
