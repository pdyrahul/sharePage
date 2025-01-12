import { useState, useEffect } from "react";

const useFetchData = (apiRequests) => {
  const [data, setData] = useState(null);  // Use null to differentiate from empty data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // Store errors as an object or array

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Run all requests and handle individual results
        const responses = await Promise.allSettled(apiRequests.map((request) => request()));
        
        const fulfilledData = responses.map((result, index) => {
          if (result.status === "fulfilled") {
            return result.value.data;  // Extract data from successful requests
          } else {
            // Log or collect errors for each API
            console.error(`Error with API ${index + 1}:`, result.reason);
            return null;  // Or handle errors differently
          }
        });

        // Set data only if there’s any successful request
        setData(fulfilledData);
        
        // Collect only rejected errors for display in UI
        const errors = responses.filter((result) => result.status === "rejected");
        setError(errors.length ? errors.map((err) => err.reason) : null);
      } catch (err) {
        console.error("Unexpected error in fetchData:", err);
        setError([err]);  // Handle any unexpected errors
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiRequests]);

  return { data, loading, error };
};

export default useFetchData;
