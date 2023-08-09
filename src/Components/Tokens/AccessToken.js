import { useState, useEffect } from 'react';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const getToken = () => {
      const tokens = document.cookie;
      if (tokens) {
        const access = tokens.split(';').find((row) => row.trim().startsWith('access_token='));
        if (access) {
          setAccessToken(access.split("=")[1]);
        } else {
          setError("Access Token Doesn't exist")
          console.error(error);
        }
      } else {
        setError("No Token Exists")
        console.error(error);
      }
    };

    getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]); 

  return { accessToken, error };
};

export default useAccessToken;
