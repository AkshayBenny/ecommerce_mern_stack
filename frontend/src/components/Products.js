import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
import { popularProducts } from '../data';

function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);
  return (
    <div className='gap-4 px-[16px] lg:grid lg:grid-cols-4 lg:px-[60px]'>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
