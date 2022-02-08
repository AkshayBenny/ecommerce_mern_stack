import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethod';

function Product() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className='grid lg:grid-cols-2 '>
      <div>
        <img src={product.img} alt='asca' />
      </div>
      <div className='space-y-6'>
        <h1>{product.title}</h1>
        <p>{product.desc}</p>
        <h1>Price: {product.price * qty}$</h1>
        <p>Color</p>
        <select
          className='border border-black bg-white px-2 py-1'
          name='color'
          onChange={(e) => setColor(e.target.value)}
        >
          {product.color?.map((c) => {
            return (
              <option value={c} key={c}>
                {c}
              </option>
            );
          })}
        </select>
        <p>Size</p>
        <select
          className='border border-black bg-white px-2 py-1'
          name='size'
          onChange={(e) => setSize(e.target.value)}
        >
          {product.size?.map((s) => {
            return (
              <option value={s} key={s}>
                {s}
              </option>
            );
          })}
        </select>
        <div className='flex items-center gap-4'>
          <div className='text-4xl' onClick={() => setQty(qty + 1)}>
            +
          </div>
          <input
            className='w-[48px] rounded border py-2 text-center'
            type='text'
            value={qty}
          />
          <div
            className='text-4xl'
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            -
          </div>
        </div>
        <div className='group'>
          <button className='w-full border-2 border-slate-900 px-6 py-3 text-center text-xl uppercase lg:w-fit'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
