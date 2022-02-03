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
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={225}
        totalSlides={sliderItems.length}
        lockOnWindowScroll={true}
        touchEnabled={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          {sliderItems.map((item, index) => {
            return (
              <Slide index={index}>
                <div className='grid justify-center gap-[30px] lg:grid-cols-2'>
                  <img
                    className='h-screen w-full object-cover'
                    src={item.img}
                    alt='playground'
                  />
                  <div className='flex flex-col justify-center space-y-20 pr-[120px]'>
                    <h1 className='text-8xl uppercase font-semibold'>{item.heading}</h1>
                    <p className='text-4xl font-thin uppercase'>{item.desc}</p>
                    <div className='group'>
                      <button className='border-2 border-slate-900 px-6 py-3 text-center text-xl uppercase'>
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default Announcement;
