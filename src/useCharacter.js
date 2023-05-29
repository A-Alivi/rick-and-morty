import React, { useState, useEffect } from 'react';
import { fetchData } from './utils';

// useCharacter hook fetches data by id

function useCharacter() {
  const [id, setId] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState();

  async function getData(characterId) {
    if (!characterId) return setError('No Character yet, type id to fetch one');

    setIsLoading(true);
    const res = await fetchData(characterId);
    console.log('RES: ', res);
    setError(res.error);
    setData(res.data);
    setIsLoading(false);
  }

  // Triggers whenever id is changed
  useEffect(() => {
    console.log('ID CHANGE -> ', id);
    getData(id);
  }, [id]);

  return {
    data: data,
    id: id,
    setId: setId,
    error: error,
    isLoading: isLoading,
  };
}

export default useCharacter;
