import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/app/lib/prisma"; // Pastikan path ini sesuai di proyekmu

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const products = await prisma.produk.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
