import React from 'react';
import { categories } from '../data';

function CategoryItem({ item }) {
  return (
    <div key={item.id} className='group relative cursor-pointer'>
      <img
        className='h-[650px] w-full object-cover'
        src={item.img}
        alt='category'
      />
      <div className='absolute top-0 left-0 z-10 h-full w-full bg-black opacity-20 transition group-hover:opacity-40'></div>
      <div className='absolute top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-4'>
        <h3 className='text-center text-6xl font-semibold uppercase text-white'>
          {item.title}
        </h3>
        <button className=' bg-white px-5 py-4 text-2xl font-light uppercase text-slate-700 transition hover:bg-slate-200 hover:text-black'>
          shop now
        </button>
      </div>
    </div>
  );
}

export default CategoryItem;
