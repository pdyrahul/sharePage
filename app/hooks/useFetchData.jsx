import { useState, useEffect, useCallback } from "react";

const useFetchData = (apiRequests) => {
  const [data, setData] = useState(null); // Use null to differentiate from empty data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Store errors as an object or array

  // Fetch Data Function
  const fetchData = useCallback(async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
      // Run all requests and handle individual results
      const responses = await Promise.allSettled(
        apiRequests.map((request) => request())
      );

      // Extract data or handle errors
      const fulfilledData = responses.map((result, index) => {
        if (result.status === "fulfilled") {
          return result.value.data; // Extract data from successful requests
        } else {
          console.error(`Error with API ${index + 1}:`, result.reason);
          return null; // Or handle errors differently
        }
      });

      setData(fulfilledData); // Update state with fetched data
      
      // Collect and set only rejected errors
      const errors = responses.filter((result) => result.status === "rejected");
      setError(errors.length ? errors.map((err) => err.reason) : null);
    } catch (err) {
      console.error("Unexpected error in fetchData:", err);
      setError([err]); // Handle unexpected errors
    } finally {
      setLoading(false); // End loading
    }
  }, [apiRequests]);

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData }; // Return refetch function
};

export default useFetchData;