"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

interface ProductFormProps {
  productId?: number;
}

export default function ProductForm({ productId }: ProductFormProps) {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    stock: 0,
    description: "",
  });
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const method = productId ? "PUT" : "POST"; // Usar PUT si es edición, POST si es nuevo
    const endpoint = productId ? `/api/products` : "/api/products";

    await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // router.push("/products"); // Redirige al listado de productos
  };

  return (
    <div>
      <h1>{productId ? "Edit Product" : "Add Product"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: parseFloat(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Stock"
          value={product.stock}
          onChange={(e) =>
            setProduct({ ...product, stock: parseInt(e.target.value) })
          }
        />
        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        ></textarea>
        <button type="submit">
          {productId ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}
