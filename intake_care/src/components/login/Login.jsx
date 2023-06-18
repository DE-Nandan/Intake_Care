import React , {useState} from 'react'
import './login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = ({setLoginUser}) => {

    // const history = useHistory()
    const navigate = useNavigate();

    
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
        .then(res => {
            alert(res.data.message)
         //    navigate("/")
         //    console.log(res.data.user.email)
            setLoginUser(res.data.user)
         //    console.log(user.email)
            navigate("/")
         })
         
    }
    const keyPress =e => {
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           login();
        }
     }

  
// document.getElementById('email').onkeydown = function(e){
//     if(e.keyCode == 13){
//      alert("dfdff");
//     }
//  };

  return (
    <div className="container2">
   
    <div className="login">
        <h2>&copy;Intake Care</h2>
        <br />
        <h1>Login</h1>
        <input type="email" name = "email" value = {user.email} onChange={handleChange} placeholder='Type your email' />
        <input type="password" name = "password" value = {user.password} onChange={handleChange} onKeyDown={keyPress} placeholder='Password' />
        <div className="button" onClick={login} >Login</div>
         <div>or</div>
         <div className="button" onClick={() => navigate("/register")} >Register</div>
    <h3 className='me'><a href="https://de-nandan.github.io/port_react/" target="_blank">&copy;de_nandan_</a></h3>
    </div>
     </div>
  )
}

export default Login