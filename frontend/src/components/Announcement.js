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
                    className='h-[400px] w-full object-cover lg:h-screen'
                    src={item.img}
                    alt='playground'
                  />
                  <div className='flex flex-col justify-center px-[16px] lg:space-y-20 lg:px-0 lg:pr-[120px]'>
                    <h1 className='text-4xl font-semibold uppercase lg:text-8xl'>
                      {item.heading}
                    </h1>
                    <p className='text-2xl font-thin uppercase lg:text-4xl'>
                      {item.desc}
                    </p>
                    <div className='group'>
                      <button className='w-full border-2 border-slate-900 px-6 py-3 text-center text-xl uppercase lg:w-fit'>
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
