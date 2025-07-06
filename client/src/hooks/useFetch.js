import { useState } from "react";
import { saveUser } from "../utils/localStorage";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    console.log("handleGoogle called with:", response);
    console.log("URL:", url);
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      console.log("Making fetch request to:", url);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: response.credential }),
      });

      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Response data:", data);
      setLoading(false);

      if (res.ok && data?.user) {
        console.log("Authentication successful, saving user");
        saveUser(data?.user);
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
