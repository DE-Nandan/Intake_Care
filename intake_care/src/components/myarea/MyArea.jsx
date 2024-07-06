import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import useDelete from '../../hooks/useDelete';

const MyArea = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    calorie: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const { deleteItem, isDeleting, error } = useDelete();

  useEffect(() => {
    // Fetch data from the backend API
    fetchData();
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));

  const fetchData = async () => {
    try {
      const response = await fetch('/home/myarea', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setSubmittedData(Array.isArray(json) ? json : []);
      
      // Calculate total calories
      const total = json.reduce((acc, item) => acc + parseFloat(item.calorie), 0);
      setTotalCalories(total.toFixed(2));
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
      const response = await fetch('/home/myarea', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setFormData({ name: '', calorie: '' }); // Reset form data
      fetchData(); // Fetch the updated data after successful form submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id) => {
    const success = await deleteItem(id, user.token);
    if (success) {
      fetchData();
    } else {
      console.error('Error deleting item');
    }
  };

 

  

  return (
    <div>
      <Navbar />
      <h1 className="text-center mb-6 text-1xl font-extrabold text-white md:text-1xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
      Keep Check on
    </span>
    <span className="text-emerald-700"> Daily Consumption</span>.
    </h1>

    <p className="text-lg font-serif font-bold text-sky-800 lg:text-xl mx-4">
  Keep track of your dietary intake with ease using our food log feature. Simply store the names of your meals along with their calorie values to monitor your nutrition effortlessly. Stay on top of your health goals by logging and reviewing your daily food consumption.
</p>


      <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg mb-8 mt-4">
        <h2 className="text-2xl font-bold text-white mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="calorie" className="text-white mb-1">
              Calorie Value:
            </label>
            <input
              type="text"
              id="calorie"
              name="calorie"
              value={formData.calorie}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg mb-3">
        <h2 className="text-2xl font-bold text-white mb-4">Submitted Data</h2>
        <ul className="space-y-2">
          {submittedData.map((item) => (
            <li key={item._id} className="text-white flex justify-between items-center">
              <span>Name: {item.name}, Calorie Value: {item.calorie}</span>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-600 text-white py-1 px-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:border-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p className="text-white">Total Calories: {totalCalories}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyArea;
