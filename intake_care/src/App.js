import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import MyArea from './components/myarea/MyArea'
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useState } from 'react';
import Daily from './components/daily/Daily';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Chat from './components/chat/Chat';
import PaymentPage from './components/payement/PaymentPage';
import { useAuthContext } from './hooks/useAuthContext';
import Stats from './components/chart/Stats';
import NearbyHealth from './components/nearbyhealth/NearbyHealth';
function App() {

  const {user}  = useAuthContext()
  
  return (
    <div className='App'>
      
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ user ? <Homepage user={user}/>:<Login/>}/>
          // needs 2 diff props 1st prop is path and second is element that we render for this route
          <Route path='/daily' element={ user ? <Daily />:<Login  />}/>
          <Route path='/myarea' element={ user ? <MyArea />:<Login/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/chat' element={ user ? <Chat /> : <Login/>} />
          <Route path='/map' element={ user ? <NearbyHealth /> : <Login/>} />
          <Route path='/stats' element={ user ? <Stats /> : <Login/>} />
          <Route path='/payment' element={ user ? <PaymentPage /> : <Login/>} />
        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
