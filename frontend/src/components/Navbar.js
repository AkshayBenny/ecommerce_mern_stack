import React from 'react';

function Navbar() {
  return (
    <div className='h-[60px] px-[60px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-10'>
          <p>EN</p>
          <input className='rounded border px-4 py-2' type='text' />
        </div>
        <div className='text-[44px] font-semibold'>CORONA_.</div>
        <div className='flex items-center gap-10'>
          <p>REGISTER</p>
          <p>SIGN IN</p>
          <div className='relative px-4 py-4'>
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
