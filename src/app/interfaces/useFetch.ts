import { HttpMethod } from "../types/useFetch";

export interface FetchOptions {
  method?: HttpMethod;
  body?: any;
  headers?: HeadersInit;
}
