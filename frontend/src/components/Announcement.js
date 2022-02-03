import React from 'react';
import { sliderItems } from '../data';
import {
CarouselProvider,
Slider,
Slide,
ButtonBack,
ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Announcement() {
  return (
    <div className='w-screen'>
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={sliderItems.length}
          lockOnWindowScroll={true}
          touchEnabled={true}
          isIntrinsicHeight={true}
        >
          <Slider>
            {sliderItems.map((item, index) => {
              return (
                <Slide index={index}>
                 <div>
                 <img
                    className='h-[343px] w-full object-cover'
                    src={item.img}
                    alt='playground'
                  />
                  <div>
                    <p>{item.desc}</p>
                  </div>
                 </div>
                </Slide>
              );
            })}
          </Slider>
         
        </CarouselProvider>
     
     
     
     
    </div>
  );


export default Announcement
