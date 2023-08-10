import { useState } from "react"
import { useSignup } from "../../../Hooks/Authentication/useSignup"

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const { Signup } = useSignup();

    const handlesubmit = async (e) =>{
        e.preventDefault()
        await Signup(username,email,password,fname,lname);
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handlesubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} id="username" name="username"/>
            <label htmlFor="email">email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} id="password" name="password"/>
            <label htmlFor="fname">fname</label>
            <input type="text" onChange={(e)=>setFname(e.target.value)} value={fname} id="fname" name="fname"/>
            <label htmlFor="lname">lname</label>
            <input type="text" onChange={(e)=>setLname(e.target.value)} value={lname} id="lname" name="lname"/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup