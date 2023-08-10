import axios from "axios";
import { useEffect, useState } from "react";
import { useTokens } from "../../Hooks/Tokens/useTokens";

const Users = () => {
  axios.defaults.withCredentials = true;

  const { useToken } = useTokens();
  const access_token = useToken();

  const [userdata, setUserdata] = useState(null);
    const fetshData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users/", {
          headers: {
            Authorization: `Bearer ${access_token}`,
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
    if (access_token) {
      fetshData();
    }
  }, [access_token]);

  if (userdata) {
    console.log(userdata);
  }

  return (
    <div>
      <h1>Users</h1>
      {userdata && userdata.map((data, i) => {
          return (
            <div key={i}>
              <h2>{data.email}</h2>
              <h3>{data.first_name}</h3>
              <h3>{data.last_name}</h3>
              <h4>{data.username}</h4>
            </div>
          );
        })
      }
    </div>
  )
}

export default Users;
