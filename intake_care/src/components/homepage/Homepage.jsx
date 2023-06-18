import React from 'react'
import './homepage.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import Dash from '../daily/Daily';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Testimonials from '../testimonials/Testimonials';
const Homepage = ({obj ,setLoginUser}) => {
  console.log(obj)
  return (
    <>
    <Navbar obj = {obj} setLoginUser = {setLoginUser}/>
    {/* <div className="bg-white max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className='px-4 py-6 sm:px-0'></div> */}
      {/* <h1>Hello {obj.name} {obj.email} ans pass is {(obj.password)*2} {setLoginUser.setLoginUser} </h1>
      <div className="button" onClick={() => setLoginUser({})}>Logout</div> */}
    {/* </div> */}
    <div>
       {/* <Dash  obj = {obj} setLoginUser = {setLoginUser}/> */}
    

        {/* <Routes>
          <Route path='/dash' element={<Dash />} />
        </Routes> */}
    </div>
    
    <Testimonials/>
    <Footer/>
    
    </>
  )
}

export default Homepage