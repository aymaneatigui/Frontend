import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Users = () => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
