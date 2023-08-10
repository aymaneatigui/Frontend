import axios from "axios";
import { useState } from "react";
import { useTokens } from "../Tokens/useTokens";

export const useLogin = () => {
  const [errors, setErrors] = useState("");
  const { setToken } = useTokens();

  const login = async (username, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        const { access, expires_at } = response.data.Tokens;
        setToken(access, expires_at);
        console.log("---Login Successfully---");
      }
    } catch (error) {
      if (error.response.status === 401) {
        console.error(error.response.data.message);
        setErrors(error.response.data.message);
      } else {
        console.error("An Error occurred");
      }
    }
  };

  return { login, errors };
};
