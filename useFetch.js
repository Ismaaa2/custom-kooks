import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({ ...state, loading: true });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch( err => {
        setstate({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        })
      })
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
};
