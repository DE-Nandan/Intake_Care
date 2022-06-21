import React from 'react'
import Navbar from '../navbar/Navbar'
import './dash.css'
import { useState } from 'react'
import Footer from '../../footer/Footer'
import BMIIMG from '../../../assets/bmi.jpg'
import CALIMG from '../../../assets/cal2.jpg'
import PROIMG from '../../../assets/prot.jpg'
import CARBIMG from '../../../assets/carbs.jpg'
import FATSIMG from '../../../assets/fats2.jpg'
// import { CCardImage,CCard,CCardBody,CCardTitle,CCardText, CButton} from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import  {Card,Dropdown} from 'react-bootstrap';
import Select from 'react-select'
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const getInitialState = () => {
  const value = "Average Activity";
  return value;
};


const Dash = ({ obj, setLoginUser }) => {
  const [calorie, setCalorie] = useState(0);
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [bmi, setBmi] = useState(0);
  const [age, setAge] = useState();
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(getInitialState);
  
  const handleChange = (e) => {
    setActivity(e.target.value);
  };
  // const activity = options.values
  // console.log(activity)
  const bee = 0;
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0 && +age > 0;
    if (!formValid) {
      alert("invalid input")
      return;
    }
    const bmi = +(10000 * (+mass / (+height) ** 2)).toFixed(2);
    setBmi(bmi);

    
   console.log(activity)
   if(activity === 'Average Activity' && gender === "male")
    { console.log("gr8")
      const calorie = ((66.5 + 13.8*(mass) + 5*(height) - 6.8*age)*1.2).toFixed(2);
      setCalorie(calorie);
    }
   else if(gender == "male")
    {const calorie = ((66.5 + 13.8*(mass) + 5*(height) - 6.8*age)*1.5).toFixed(2);
      setCalorie(calorie);
    }
    else if(activity === 'Average Activity')
    {
      const calorie = (655.1 + 9.6*(mass) + 1.9*(height) - 4.7*age)*1.2;
      setCalorie(calorie);
    }
    else
    {
      const calorie = ((655.1 + 9.6*(mass) + 1.9*(height) - 4.7*age)*1.5).toFixed(2);
      setCalorie(calorie);
    }
   
     
    console.log(calorie);
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

      <div className="Container bg-slate-300">

        <div class="flex items-center justify-center block p-6 rounded-lg shadow-lg bg-slate-800 max-w-md">
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
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-grey-500 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  name="inlineRadioOptions" 
                  id="inlineRadio1"
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                /> 
             <label class="form-check-label inline-block text-white" for="inlineRadio10">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-grey-500 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  name="inlineRadioOptions" id="inlineRadio2"
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                />
                <label class="form-check-label inline-block text-white" for="inlineRadio20">Female</label>

              </div>


             
            </div>

            <div>
           
      <div className='flex text-slate-800 gap-4'>
      <p className='text-white'>Activity:</p>
      <select value={activity} onChange={(e) => {setActivity(e.target.value);}}>
        <option value="Average Activity">Average Activity</option>
        <option value="High Activity">High Activity</option>
      </select>
      {/* <p className='text-white'>{activity}</p> */}
      
      </div>
      {/* <p>{activity}</p> */}
    </div>
            

            {/* <Select options={options}/> */}
  
            {/* {activity} */}
           {/* {calorie} */}
            <button 
            // onClick={() => {
            //   setGender('');
            // }} 
            type="submit"
              class="
      w-3/6
      my-4
      mx-5
      mb-0
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
      ease-in-out">Get Results!</button>
            {/* <p>bmi: {bmi}</p> */}
          </form>
        </div>
      </div>
      <div className='stats bg-slate-300'>
      <div className='ml-5'>
      <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={BMIIMG} />
  <Card.Body>
    <Card.Title>BMI</Card.Title>
    <Card.Text>
    Body mass index is a value derived from the mass and height of a person.
    </Card.Text>
    {(() => {
        if (bmi === 0) {
          return (
            <div><button className="btn btn-secondary disabledD">Fill Your Details Above</button></div>
          )
        } else if (bmi <18.5) {
          return (
            <div><button className="btn btn-info disabledD">Underweight <br/> BMI: {bmi} </button></div>
          )
        } else if(bmi >= 18.5 && bmi <=24.9 ){
          return (
            <div><button className="btn btn-success disabledD ml-5">Normal <br/> BMI: {bmi}</button></div>
          )
        } else if(bmi > 24.9 && bmi <=29.9 ){
          return (
            <div><button className="btn btn-warning disabledD ml-5">Overweight <br/> BMI: {bmi}</button></div>
          )
        }
         else if(bmi > 30.34 && bmi <=34.9 ){
          return (
            <div><button className="btn btn-danger disabledD ml-5">Obese <br/> BMI: {bmi}</button></div>
          )
        }
         else {
          return (
            <div><button className="btn btn-danger disabledD ml-5">Extremely Obese <br/> BMI: {bmi}</button></div>
          )
        }
      })()}
   {/* <p className='text-lime-700'>Your BMI :</p>  */}
    {/* <button className={bmi > 10 ?"btn btn-primary disabledD":""}>{bmi}</button> */}
  </Card.Body>
</Card>
</div>

<div className='ml-5'>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={CALIMG} />
  <Card.Body>
    <Card.Title>Calorie Needs</Card.Title>
    <Card.Text>
     Daily calories requiremnt for maintaining weight. 
    </Card.Text>
    {(() => {
        if (calorie === 0) {
          return (
            <div><button className="btn btn-secondary disabledD">Fill Your Details Above</button></div>
          )
        } 
         else {
          return (
            <div><button className="btn btn-success disabledD ml-5">Calories: <br/>  {calorie}(cals/day)</button></div>
          )
        }
      })()}
  </Card.Body>
</Card>
</div>
<div className='ml-5'>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={PROIMG} />
  <Card.Body>
    <Card.Title>Protein Needs</Card.Title>
    <Card.Text>
      Daily Protein requirement
    </Card.Text>
    {(() => {
        if (calorie === 0) {
          return (
            <div><button className="btn btn-secondary disabledD">Fill Your Details Above</button></div>
          )
        } 
         else {
          return (
            <div><button className="btn btn-success disabledD ml-5">Protein: <br/>  {(mass*0.8).toFixed(2)}(g) - {mass}(g)</button></div>
          )
        }
      })()}
  </Card.Body>
</Card>
</div>
<div className='ml-5'>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={CARBIMG} />
  <Card.Body>
    <Card.Title>Carbohydrated Needs</Card.Title>
    <Card.Text>
      Carbs needed in a day.
    </Card.Text>
    {(() => {
        if (calorie === 0) {
          return (
            <div><button className="btn btn-secondary disabledD">Fill Your Details Above</button></div>
          )
        } 
         else {
          return (
            <div><button className="btn btn-success disabledD ml-5">Carbohydrates: <br/>  {(calorie*0.6).toFixed(2)}(cals/day)</button></div>
          )
        }
      })()}
  </Card.Body>
</Card>
</div>
<div className='ml-5'>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={FATSIMG} />
  <Card.Body>
    <Card.Title>Fats Needs</Card.Title>
    <Card.Text>
      Daily Fat Needs
    </Card.Text>
    {(() => {
        if (calorie === 0) {
          return (
            <div><button className="btn btn-secondary disabledD">Fill Your Details Above</button></div>
          )
        } 
         else {
          return (
            <div><button className="btn btn-success disabledD ml-5">Fats: <br/>  {(calorie*0.3).toFixed(2)}(cals/day)</button></div>
          )
        }
      })()}
  </Card.Body>
</Card>
</div>
    </div>

      <Footer/>
    </>
  )
}

export default Dash