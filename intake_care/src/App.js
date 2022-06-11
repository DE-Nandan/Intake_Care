import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useState } from 'react';
function App() {

  const [user, setLoginUser] = useState({})
  // console.log(user.email)
  // console.log(user.password)
  const obj = user
  // console.log(user.email)
  // console.log(user)
  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={ (user&&user._id) ? <Homepage obj = {obj} setLoginUser = {setLoginUser}/>:<Login setLoginUser={setLoginUser} />}/>
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
