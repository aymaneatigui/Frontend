import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  
  axios.defaults.withCredentials = true;


    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handlesubmit = async (e)=>{
    e.preventDefault();

    try {

        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
          username: username,
          password: password,
        });
      
        const data = response.data;
        const message = data.message;
        const { access, refresh } = data.Tokens;
      
        console.log("Message: " + message);
        console.log("Access: " + access);
        console.log("Refresh: " + refresh);
        console.log("Login Successfull");

      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Invalid Username Or Password");
        } else {
          console.error(error);
        }
      }

  }

  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handlesubmit}>
            <label htmlFor="username">Username</label>
            <input type="text"  onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="username" id="username" name="username" />
            <label htmlFor="password">password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} id="password" name="password" />
            <input type="submit"/>
        </form>
        <label>Dont have account</label>
        <Link to="/signup" >Sign Up</Link>

    </div>

  )
}

export default Login