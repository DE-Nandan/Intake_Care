import React from 'react'
import './register.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = () => {
    
    const navigate = useNavigate();

    const [user , setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e => {
        
        const {name , value} = e.target
        console.log(name,value);
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () => {
        const {name ,email ,password,reEnterPassword} = user
        if(name && email && password && password === reEnterPassword ){
            // alert("posted")
             axios.post("http://localhost:9002/register",user)
             .then(res => {
                 alert(res.data.message)
                 navigate("/login")
                })
            }
        else
        {
            alert("invalid input")
        }
        
    }
    const keyPress =e => {
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           register();
        }
     }
  return (
    <div className="container2">
    <div className="register">
    {
        console.log("User",user)
    }
    <h1>Register</h1>
    <input type="text" name = "name" value = {user.name} placeholder='Type your name' onChange={ handleChange} />
    <input type="text" name = "email" value = {user.email} placeholder='Type your Email' onChange={handleChange}/>
    <input type="password" name = "password" value = {user.password} placeholder='Password'onChange={handleChange} />
    <input type="password" name = "reEnterPassword" value = {user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} onKeyDown={keyPress} />
    <div className="button" onClick={register}>Register</div>
     <div>or</div>
     <div className="button" onClick={() => navigate("/login") }>Login</div>
</div>
</div>
  )
}

export default Register