"use client";

import { useState } from "react";
import { useFetch } from "@/app/customHooks/useFetch";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const router = useRouter();
  const { fetchData, loading, error } = useFetch("/api/products", {
    method: "POST",
  });

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchData({
      body: {
        name: product.name,
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
        description: product.description,
      },
    });

    if (!error) {
      router.push("/products");
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add Product"}
        </button>
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
}
