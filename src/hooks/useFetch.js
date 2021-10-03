import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { charmander, pikachu, ditto } from '../state'
import { setLocalStorage } from '../utils/localstorage';

const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const boundFetching = bindActionCreators({ charmander, pikachu, ditto }, dispatch);

  const handleObjectPromise = async (obj) => {
    for (let element in obj) {
      const newObject = { [element]: await obj[element] }
      boundFetching[element](newObject[element])
      setLocalStorage(element, newObject);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const apiFetch = async (url, options) => {
      try {
        if(!url) throw new Error('url not provided');
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
