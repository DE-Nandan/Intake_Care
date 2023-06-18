import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './testimonials.css'

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


const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
   
    <section className="testimonialsy">
   <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Intake Care</span> Your Care.</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime voluptatem est atque quis voluptatum quia consectetur inventore voluptates eos sed!</p>
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

export default Testimonials