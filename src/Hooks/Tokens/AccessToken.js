import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getToken = () => {
      const tokens = document.cookie;
      if (tokens) {
        const access = tokens.split(';').find((row) => row.trim().startsWith('access_token='));
        if (access) {
          setAccessToken(access.split("=")[1]);
        } else {
          navigate('/login')
        }
      } else {
        navigate('/login')
      }
    };

    getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]); 

  return { accessToken };
};

export default useAccessToken;
