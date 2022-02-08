import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=' px-[16px] lg:px-[60px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-10'>
          <p>EN</p>
          <div class='relative mx-auto flex items-center  text-gray-600'>
            <input
              class='h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none'
              type='search'
              name='search'
              placeholder='Search'
            />
            <button type='submit' class='absolute right-0 top-0 mt-3 mr-4'>
              <svg
                class='h-4 w-4 fill-current text-gray-600'
                version='1.1'
                id='Capa_1'
                x='0px'
                y='0px'
                viewBox='0 0 56.966 56.966'
              >
                <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
              </svg>
            </button>
          </div>
        </div>
        <Link to='/'>
          <div className='cursor-pointer text-[44px] font-semibold'>
            CORONA_.
          </div>
        </Link>
        <div className='flex items-center gap-10'>
          <p className='cursor-pointer hover:text-slate-700'>REGISTER</p>
          <p className='cursor-pointer hover:text-slate-700'>SIGN IN</p>
          <div className='relative cursor-pointer px-4 py-4 hover:text-slate-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
            </svg>
            <p className='absolute top-1 right-1 flex items-center justify-center rounded-full bg-slate-700 px-[8px] py-[3px] text-xs text-white'>
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
