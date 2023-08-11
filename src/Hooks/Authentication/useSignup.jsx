import axios from "axios";
import { useState } from "react";
import { useTokens } from "../Tokens/useTokens";

export const useSignup = () => {
  const [errors, setErrors] = useState();
  const { setToken } = useTokens();

  const Signup = async (username, email, password, fname, lname) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: username,
        email: email,
        first_name: fname,
        last_name: lname,
        password: password,
      });
      if (response.status === 201) {
        const { token, exp } = response.data;
        setToken(token, exp);
        console.log("---Sign-up Successfully---");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
        Object.keys(error.response.data).forEach(field => {
          console.error(field+" : "+error.response.data[field][0])
        });
      } else {
        console.error(error);
      }
    }
  };

  return { Signup, errors };
};
