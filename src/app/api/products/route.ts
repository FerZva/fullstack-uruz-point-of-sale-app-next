import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

// Get route
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { name, price, stock, description } = await req.json();
  try {
    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
        description,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating product" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const { id, name, price, stock, description } = await req.json();
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
        description,
      },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating product" },
      { status: 500 }
    );
  }
}

// Delete route (Eliminar producto)
export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 204 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting product" },
      { status: 500 }
    );
  }
}
