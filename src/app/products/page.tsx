"use client";
import { useFetch } from "@/app/customHooks/useFetch";
import { Product } from "@/app/interfaces/products";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const {
    data: products,
    loading,
    error,
    fetchData,
  } = useFetch<Product[]>("/api/products");
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await fetchData({
      method: "DELETE",
      body: { id },
    });
    router.refresh(); // Recargar la página para actualizar la lista
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full min-h-screen bg-slate-500">
      <h1>Product List</h1>
      <button onClick={() => router.push("/products/new")}>Add Product</button>
      <div className="w-full flex flex-col items-center min-h-screen">
        <table className="w-full max-w-[50rem] m-auto bg-white">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
