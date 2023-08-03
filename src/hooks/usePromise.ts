import { useState, useEffect } from "react";

type PromiseFunction<T> = () => Promise<T>;

const usePromise = <T>(promise: PromiseFunction<T>, dependencies: [] = []) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    promise().then(response => setData(response)).catch(error => setError(error));
  }, [...dependencies])

  return { data, error };
} 

export default usePromise;