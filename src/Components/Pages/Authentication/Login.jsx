import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../../Hooks/Authentication/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handlesubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder='username'
          id='username'
          name='username'
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id='password'
          name='password'
        />
        <input type='submit' />
      </form>
      <label>Dont have account</label>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
};

export default Login;
