import { useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok && data?.user) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        window.location.replace("/");
      } else {
        throw new Error(data?.message || "Authentication failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setError(error?.message || "Network error. Please check your connection and try again.");
      console.error("Authentication error:", error);
    }
  };
  return { loading, error, handleGoogle };
};

export default useFetch;
