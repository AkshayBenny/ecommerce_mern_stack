import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filter, setFilter] = useState({});

  const handleFilters = (e) => {

  }
  return (
    <div>
      <h1>Dresses</h1>
      <div className='flex flex-wrap items-center lg:justify-between'>
        <div className='flex items-center gap-4'>
          <h3>Filter products:</h3>
          <select
            className='border border-black bg-white px-2 py-1'
            name='color'
            onChange={handleFilters}
          >
            <option value='yellow'>Yellow</option>
            <option value='blue'>Blue</option>
            <option value='violet'>Violet</option>
            <option value='black'>Black</option>
          </select>
          <select
            className='border border-black bg-white px-2 py-1'
            name='size'
            onChange={handleFilters}
          >
            <option value='md'>MD</option>
            <option value='lg'>LG</option>
            <option value='xl'>XL</option>
            <option value='xxl'>XXL</option>
          </select>
        </div>
        <div>
          <h2>Sort products:</h2>
          <select name='sort'>
            <option value='price'>Price</option>
            <option value='name'>Name</option>
          </select>
        </div>
      </div>

      <Products />
    </div>
  );
}

export default ProductList;
