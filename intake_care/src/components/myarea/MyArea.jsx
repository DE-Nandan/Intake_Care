import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


// useState is like having a storage box inside a React component. It allows you to keep track of values that can change over time, such as user input or dynamic data. You can easily access and update these values using special functions provided by useState.

// useEffect is like a special helper that watches for specific changes in your component and performs certain actions when those changes happen. It's useful for things like fetching data from a server, updating the page in response to user interactions, or setting up timers. With useEffect, you can make your component aware of what's happening around it and respond accordingly.

const MyArea = ({ obj, setLoginUser }) => {
  console.log(obj)
  const [formData, setFormData] = useState({
    name: '',
    calorieValue: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9002/myarea');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the backend API
    try {
      await axios.post('http://localhost:9002/myarea', formData);
      setFormData({ name: '', calorieValue: '' });
      fetchData(); // Fetch the updated data after successful form submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
     
       <Navbar obj={obj} setLoginUser={setLoginUser} />
       <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Intake Care</span> Your Care.</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptatem est atque quis voluptatum quia consectetur inventore voluptates eos sed!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="calorieValue">Calorie Value:</label>
        <input
          type="text"
          id="calorieValue"
          name="calorieValue"
          value={formData.calorieValue}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((item) => (
          <li key={item._id}>
            Name: {item.name}, Calorie Value: {item.calorieValue}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default MyArea;
