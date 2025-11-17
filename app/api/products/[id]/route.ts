import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../../lib/mongodb";

// GET /api/products/[id] -> devuelve un producto por su campo "id"
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const db = await getDb();
    const product = await db.collection("products").findOne({ id });

    if (!product) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error al obtener producto por id desde MongoDB", error);
    return NextResponse.json(
      { message: "Error al obtener producto" },
      { status: 500 }
    );
  }
}
