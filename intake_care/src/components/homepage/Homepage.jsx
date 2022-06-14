import React from 'react'
import './homepage.css'
import Navbar from './navbar/Navbar'
const Homepage = ({obj ,setLoginUser}) => {
  console.log(obj)
  return (
    <>
    <Navbar obj = {obj} setLoginUser = {setLoginUser}/>
    <div className="bg-white max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className='px-4 py-6 sm:px-0'></div>
      {/* <h1>Hello {obj.name} {obj.email} ans pass is {(obj.password)*2} {setLoginUser.setLoginUser} </h1>
      <div className="button" onClick={() => setLoginUser({})}>Logout</div> */}
    </div>
    </>
  )
}

export default Homepage