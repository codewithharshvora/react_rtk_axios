import { Axios } from '../api/axiosInstance';
import { useEffect, useState } from 'react';

const usePost = async (url, param) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(url, { ...param });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, [url]);

  return { data, error };
};

export default usePost;
