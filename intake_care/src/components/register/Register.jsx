import React from 'react'
import './register.css'
import { useState } from 'react'
const Register = () => {

    const [user , setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword:"",
    })

    const handleChange = e => {
        
        const {name , value} = e.target
        console.log(name,value);
        setUser({
            ...user,
            [name] : value
        })
    }
  return (
    <div className="register">
    {
        console.log("User",user)
    }
    <h1>Register</h1>
    <input type="text" name = "name" value = {user.name} placeholder='Type your name' onChange={ handleChange} />
    <input type="text" name = "email" value = {user.email} placeholder='Type your Email' onChange={handleChange}/>
    <input type="password" name = "password" value = {user.password} placeholder='Password'onChange={handleChange} />
    <input type="password" name = "reEnterPassword" value = {user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} />
    <div className="button">Register</div>
     <div>or</div>
     <div className="button">Login</div>
</div>
  )
}

export default Register