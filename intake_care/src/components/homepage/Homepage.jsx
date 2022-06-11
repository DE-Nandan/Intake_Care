import React from 'react'
import './homepage.css'
const Homepage = ({obj ,setLoginUser}) => {
  console.log(obj)
  return (
    <div className="homepage">
      <h1>Hello {obj.name} {obj.email} ans pass is {(obj.password)*2} {setLoginUser.setLoginUser} </h1>
      <div className="button" onClick={() => setLoginUser({})}>Logout</div>
    </div>
  )
}

export default Homepage