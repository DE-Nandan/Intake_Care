import React from 'react'
import Navbar from '../navbar/Navbar'
import './dash.css'
import { useState } from 'react'
import Footer from '../../footer/Footer'
const Dash = ({ obj, setLoginUser }) => {
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [bmi, setBmi] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState('male');

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0 && +age > 0;
    if (!formValid) {
      alert("invalid input")
      return;
    }
    const bmi = 10000 * (+mass / (+height) ** 2);
    setBmi(bmi);
  };
  return (
    <>
      <Navbar obj={obj} setLoginUser={setLoginUser} />
      {/* <div className="App">
      <form onSubmit={calculate}>
        <div>
          <label>height in meters</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <label>mass in kg</label>
          <input value={mass} onChange={(e) => setMass(e.target.value)} />
        </div>

        <button type="submit">calculate</button>
      </form>
      <p>bmi: {bmi}</p>
    </div> */}

      <div className="Container">

        <div class="flex items-center justify-center block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form onSubmit={calculate}>

            <div class="form-group mb-6">
              <label>Height:</label>
              <input value={height} onChange={(e) => setHeight(e.target.value)}
                class="form-control
          block
          w-5/6
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="in cms" />
            </div>
            <div class="form-group mb-6">
              <label>Weight:</label>
              <input value={mass} onChange={(e) => setMass(e.target.value)}
                class="form-control
          block
          w-5/6
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="in Kg" />
            </div>
            <div class="form-group mb-6">
              <label>Age:</label>
              <input value={age} onChange={(e) => setAge(e.target.value)}
                class="form-control
          block
          w-5/6
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="in Yrs" />
            </div>
            <div class="form-group mb-6">
              
            <label>Gender:</label>
            <div class="form-check form-check-inline">
              
           
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  name="inlineRadioOptions" 
                  id="inlineRadio1"
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                /> 
             <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  name="inlineRadioOptions" id="inlineRadio2"
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                />
                <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Female</label>

              </div>


             
            </div>



            <button 
            // onClick={() => {
            //   setGender('');
            // }} 
            type="submit"
              class="
      w-3/6
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Calculate</button>
            <p>bmi: {bmi}</p>
          </form>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Dash