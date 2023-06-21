import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/slider.css'
import "swiper/css/effect-fade";

import SlideOne from '../res/florian-giorgio-t6kr9bbHaVg-unsplash.jpg'
import SlideTwo from '../res/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg'
import SlideThree from '../res/pankaj-shah-1ff_i7jO-4g-unsplash.jpg'

const Slide = () => {
   
    
    return (
        <div>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      direction='vertical'
      loop={true}
      effect='fade'
      autoplay={{
        delay: 700
      }}
    >
      <SwiperSlide data-swiper-animation="animate__fadeIn">
        <img src={SlideOne} alt='slide'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={SlideTwo} alt='slide'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={SlideThree} alt='slide'/>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Slide;