import { useState, useEffect } from "react";

const useFetchData = (apiRequests) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Run all requests and handle individual results
        const responses = await Promise.allSettled(apiRequests.map((request) => request()));
        const fulfilledData = responses.map((result, index) => {
          if (result.status === "fulfilled") {
            return result.value.data;
          } else {
            // Log or collect errors for each API
            console.error(`Error with API ${index + 1}:`, result.reason);
            return null; // Or handle errors differently
          }
        });

        setData(fulfilledData);
        setError(
          responses
            .filter((result) => result.status === "rejected")
            .map((result) => result.reason)
        );
      } catch (err) {
        console.error("Unexpected error in fetchData:", err);
        setError([err]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiRequests]);

  return { data, loading, error };
};

export default useFetchData;
