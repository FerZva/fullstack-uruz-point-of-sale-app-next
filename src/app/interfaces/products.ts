//P\ Product Interfaces
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export interface CreateProductInput {
  name: string;
  price: number;
  stock: number;
  description: string;
}

export interface UpdateProductInput {
  id: number;
  name?: string;
  price?: number;
  stock?: number;
  description: string;
}

export interface DeleteProductInput {
  id: number;
}

export interface ApiErrorResponse {
  error: string;
}

export interface ApiSuccessResponse<T> {
  data: T;
}

// Custom useFetch hook interfaces

export interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refresh: () => void;
}
