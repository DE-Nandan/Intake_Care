import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import MyArea from './components/myarea/MyArea'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import Daily from './components/daily/Daily';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
function App() {

  const [user, setLoginUser] = useState({})
  // console.log(user.email)
  // console.log(user.password)
  const obj = user
  // console.log(user.email)

  return (
    <div className='App'>
      
        <Routes>
          <Route exact path='/' element={ (user&&user._id) ? <Homepage obj = {obj} setLoginUser = {setLoginUser}/>:<Login setLoginUser={setLoginUser} />}/>
          <Route path='/daily' element={ (user&&user._id) ? <Daily obj = {obj} setLoginUser = {setLoginUser}/>:<Login setLoginUser={setLoginUser} />}/>
          <Route path='/myarea' element={ (user&&user._id) ? <MyArea obj = {obj} setLoginUser = {setLoginUser}/>:<Login setLoginUser={setLoginUser} />}/>
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={<Register />} />
          
        
           
        
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
