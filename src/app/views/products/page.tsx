"use client";
import { useFetch } from "@/app/customHooks/useFetch";
import { Product } from "@/app/interfaces/products";
import { useRouter } from "next/navigation";
import { IoMdAddCircleOutline } from "react-icons/io";

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
    <div className="w-full min-h-screen">
      <div className="px-4">
        <h1>Product List</h1>
        <button
          onClick={() => router.push("./products/new")}
          className="flex px-4 py-2 items-center bg-slate-900 text-white rounded-lg hover:bg-slate-800"
        >
          <IoMdAddCircleOutline className="text-[25px]" />
          <p className="ml-2">Add Product</p>
        </button>
      </div>
      <div className="w-full flex flex-col px-4 ">
        <table className="w-full m-auto">
          <thead className="bg-slate-200">
            <tr className="text-left">
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
                    <button className="flex px-2 py-1 items-center bg-slate-900 text-white rounded-lg hover:bg-slate-800 mr-4">
                      Edit
                    </button>
                    <button className="flex px-2 py-1 items-center bg-rose-700 text-white rounded-lg hover:bg-rose-800">
                      Delete
                    </button>
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
