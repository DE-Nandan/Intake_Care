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
  return (
    <div className="register">
    <h1>Register</h1>
    <input type="text" placeholder='Type your name' />
    <input type="text" placeholder='Type your Email' />
    <input type="password" placeholder='Password' />
    <input type="password" placeholder='Re-enter Password' />
    <div className="button">Register</div>
     <div>or</div>
     <div className="button">Login</div>
</div>
  )
}

export default Register