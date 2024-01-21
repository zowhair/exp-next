import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default function PartnersCarousel() {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        pagination: true,
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);
  
  
    return (
        <swiper-container ref={swiperRef} init="false" slides-per-view="3" loop="true" > 
        
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide asd</swiper-slide>
            <swiper-slide>Slide ko</swiper-slide>
            <swiper-slide>Slide 990</swiper-slide>
            <swiper-slide>Slide klklk</swiper-slide>
        </swiper-container>
    )
}