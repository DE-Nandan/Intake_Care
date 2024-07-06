import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Features.css'

import AVTR1 from '../../assets/calc.png'


import SwiperCore , { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation]);



const data = [
  {
    avatar : AVTR1,
    name: "Dashboard",
    review :  "With ordinary talentand extraordinary perseverance, all things are attainable."
  },
  {
    avatar : AVTR1,
    name: "Daily Req",
    review : "Would you like me to give you a formula for success?  It s quite simple. Double your rate of failure."
  },
  {
    avatar : AVTR1,
    name: "My Area",
    review : "We’re here to put a dent in the universe.”"
  },
  {
    avatar : AVTR1,
    name: "Elon Musk",
    review : "I think it is possible for ordinary people to choose to be extraordinary"
  },
]


const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
   
    <section className="testimonialsy">
   <h1 className="text-center mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
      Intake Care
    </span>
    <span className="text-emerald-700"> Your Care</span>.
    
  </h1>
  <p className="text-lg font-serif font-bold text-sky-800 lg:text-xl max-w-3xl mx-auto">
    Welcome to InTake Care! Our website offers a comprehensive suite of health and nutrition tools to help you make informed decisions about your well-being. From interactive charts showing dietary impacts to personalized health insights, explore our features to take charge of 
    your health journey today. <br/> <br/>  Scroll Slider to Know More.
  </p>
     <div className="outer">
    <Swiper className="container testimonial__container">
     {
       data.map(({avatar,name,review},index) =>{
         return(
           <SwiperSlide key = {index} className="testimonial"
          
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
           >
             <div className="client__avatar">
               <img src={avatar}  />
             </div>
             <h4 className='client__review2'>{name}
             </h4>
             <div className="forImage">
             <img src={avatar}  />
             </div>
    
           </SwiperSlide>
         )
       })
     }
      
    </Swiper>
    </div>
    </section>
  
  )
}

export default Features