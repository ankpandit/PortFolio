import React from 'react' ;
import './Portfolio.css';
import {Swiper ,SwiperSlide}  from 'swiper/react' ;
import 'swiper/css' ;
import Sidebar from "../../img/sidebar.png";
import FlowerPhobia from '../../img/FlowerPhobia.png' ;
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

export default function Portfolio() {
  return (
    <div className="portfolio" id='PortFolio'>

        {/* Heading */}
        <span>Recent Projects</span>
        <span>PortFolio</span>
        
        {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={FlowerPhobia} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
