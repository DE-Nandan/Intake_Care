import React from 'react'
import './homepage.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import Dash from '../daily/Daily';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Features from '../features/Features';
import Layout from '../Layout/Layout';
const Homepage = ({user}) => {
  

  
  return (
    <>
   
    <Layout>
    <Features
    />

    </Layout>
    
    
    
    </>
  )
}

export default Homepage