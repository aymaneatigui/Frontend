import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("")
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/",{
          username : username,
          password : password,
      })

      if (response.status === 200) {
        const { access } = response.data.Tokens;
        const expiresAt = response.data.Tokens.expires_at;

        console.log("-------Login Successfull-------");
        console.log("Access Token: " + access);

        const expires = new Date(expiresAt * 1000).toUTCString();
        document.cookie = `access_token=${access}; expires=${expires};`;

        navigate("/users");
      } 
    } catch(error){
      if(error.response.status === 401){
        const errorMessage = error.response.data.message;
        setErrors(errorMessage);
        console.error(errorMessage);
      } else {
      console.error("An error occurred");
    }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <h2 style={{color:"red"}}>{errors}</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="username" id="username" name="username" />
        <label htmlFor="password">password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" name="password" />
        <input type="submit" />
      </form>
      <label>Dont have account</label>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
