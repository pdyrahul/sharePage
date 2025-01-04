import { useState, useEffect } from 'react';

const useFetchData = (apiRequests) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const responses = await Promise.all(apiRequests.map((request) => request()));
        setData(responses.map((response) => response.data));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiRequests]);

  return { data, loading, error };
};

export default useFetchData;
