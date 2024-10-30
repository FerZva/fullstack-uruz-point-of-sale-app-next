import { useState, useEffect, useCallback } from "react";
import { FetchOptions } from "../interfaces/useFetch";

export function useFetch<T>(url: string, options?: FetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (customOptions?: FetchOptions) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          method: customOptions?.method || options?.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...(customOptions?.headers || options?.headers || {}),
          },
          body: customOptions?.body ? JSON.stringify(customOptions.body) : null,
        });

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    },
    [url, options]
  );

  useEffect(() => {
    if (options?.method === "GET" || !options?.method) {
      fetchData();
    }
  }, [url, options, fetchData]);

  return { data, loading, error, fetchData };
}
