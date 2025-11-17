import { NextResponse } from "next/server";
import { getDb } from "../../../lib/mongodb";

// GET /api/products -> devuelve todos los productos desde MongoDB
export async function GET() {
  try {
    const db = await getDb();
    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error al obtener productos desde MongoDB", error);
    return NextResponse.json(
      { message: "Error al obtener productos" },
      { status: 500 }
    );
  }
}
