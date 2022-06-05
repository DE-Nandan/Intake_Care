import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div class="wrapper fadeInDown">
    <div id="formContent">
     
  
      
      <div class="fadeIn first">
        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
      </div>
  
      
      <form>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
        <input type="submit" class="fadeIn fourth" value="Log In"/>
      </form>
  
     
      <div id="formFooter">
        <a class="underlineHover" href="#">Forgot Password?</a>
      </div>
  
    </div>
    <br />
    <h1>Lmao</h1>
  </div>
 
  )
}

export default Login