import React , {useState} from 'react'
import './login.css'
import axios from 'axios'
const Login = () => {

    const [user , setUser] = useState({
      
        email:"",
        password:"",
       
    })

    const handleChange = e => {
        
        const {name , value} = e.target
        console.log(name,value);
        setUser({
            ...user,
            [name] : value
        })
    }

   const login = () =>{
       axios.post("http://localhost:9002/login" , user)
       .then(res => alert(res.data.message))
   }
  return (
    <div className="login">
    {
        console.log("User" , user)
    }
        <h1>Login</h1>
        <input type="emil" name = "email" value = {user.email} onChange={handleChange} placeholder='Type your email' />
        <input type="password" name = "password" value = {user.password} onChange={handleChange} placeholder='Password' />
        <div className="button" onClick={login}>Login</div>
         <div>or</div>
         <div className="button">Register</div>
    </div>
  )
}

export default Login