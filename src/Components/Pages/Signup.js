import { useState, useEffect } from "react"
import axios from "axios"

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [errors, setErrors] = useState({})

    const handlesubmit = async (e) =>{
        e.preventDefault()
        console.log(fname+" / "+lname+" / "+email+" / "+username+ " / "+ password)
        //POST api info

        try {
          
          const response = await axios.post('http://127.0.0.1:8000/api/signup/',{
            username:username,
            email: email,
            first_name:fname,
            last_name: lname,
            password:password
          })

          if(response.status===201){

            const { access } = response.data.Token;
            const expiresAt = response.data.Token.expires_at;

            console.log("-------Sign Up Successfully-------");
            console.log("Access Token: " + access);
    
            const expires = new Date(expiresAt * 1000).toUTCString();
            document.cookie = `access_token=${access}; expires=${expires};`;
          }
        } catch (error) {
          if (error.response && error.response.status===400) {
            console.error(error.response.data)
            const Errors = {};
            Object.keys(error.response.data).forEach(field => {
              Errors[field] = error.response.data[field][0];
          });
            setErrors(Errors)
          } else {
            console.error(error)
          }
        }

    }


    //POST api info



    //Add access token to cookies from response 
    //redericte users page

  return (
    <div>
        <h1>Signup</h1>
        {Object.keys(errors).map((key, index) => (
            <div key={index} style={{ color: "red" }}>
                {key}: {errors[key]}
            </div>
        ))}

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