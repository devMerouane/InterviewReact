import { useState, useEffect } from 'react';

const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const handleObjectPromise = async (obj) => {
    let newObject = {};
    for (let element in obj) {
      newObject = { ...newObject, [element]: await obj[element] }
    }

    setData(newObject);
    setIsLoading(false);
  }

  useEffect(() => {
    const apiFetch = async (url, options) => {
      try {
        const newURL = options?.queryParams?.order ? `${url}?order=${options.queryParams.order.replace(/\s+/g, '-')}` : url;
        const response = await fetch(newURL);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        return data;
      } catch (error) {
        console.log(error)
      }
    }

    const response = callback(apiFetch)
    handleObjectPromise(response);

  }, []);

  return [data, isLoading]
};

export default useFetch;
