import axios from "axios";
import { useEffect, useState } from "react";
import useAccessToken from "../Tokens/AccessToken";

const Users = () => {
  axios.defaults.withCredentials = true;

  const { accessToken, error } = useAccessToken();

  const [userdata, setUserdata] = useState(null);
    const fetshData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          mode: "cors",
          credentials: "include",
        });

        setUserdata(response.data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    if (accessToken) {
      fetshData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  if (userdata) {
    console.log(userdata);
  }

  return (
    <div>
      <h1>Users</h1>
      {userdata ?
        userdata.map((data, i) => {
          return (
            <div key={i}>
              <h2>{data.email}</h2>
              <h3>{data.first_name}</h3>
              <h3>{data.last_name}</h3>
              <h4>{data.username}</h4>
            </div>
          );
        })
        :  <h2>{error}</h2>
      }
    </div>
  )
}

export default Users;
