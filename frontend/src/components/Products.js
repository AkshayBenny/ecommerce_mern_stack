import React from 'react';
import Product from './Product';
import { popularProducts } from '../data';

function Products() {
  return (
    <div className='gap-4 px-[16px] lg:grid lg:grid-cols-4 lg:px-[60px]'>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
