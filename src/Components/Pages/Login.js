import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlesubmit = (e) =>{
      e.preventDefault()
      console.log(email)
    }

  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handlesubmit}>
            <label htmlFor="email">email</label>
            <input type="email"  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email@app.com" id="email" name="email" />
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