import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder='Type your name' />
        <input type="password" placeholder='Password' />
        <div className="button">Login</div>
         <div>or</div>
         <div className="button">Register</div>
    </div>
  )
}

export default Login