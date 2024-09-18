import { useState, useEffect } from "react";

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedApiKey = sessionStorage.getItem("apiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    sessionStorage.setItem("apiKey", key);
    setApiKey(key);
  };

  const clearApiKey = () => {
    sessionStorage.removeItem("apiKey");
    setApiKey(null);
  };

  return { apiKey, saveApiKey, clearApiKey };
}
