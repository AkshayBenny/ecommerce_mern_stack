import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

function Product() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className='grid lg:grid-cols-2 '>
      <div>
        <img src={product.img} alt='asca' />
      </div>
      <div className='space-y-6'>
        <h1>{product.title}</h1>
        <p>{product.desc}</p>
        <h1>Price: {product.price}$</h1>
        <p>Color</p>
        <div className='border border-black bg-white px-2 py-1'>
          {product.color?.map((c) => {
            return (
              <div
                key={c}
                onClick={() => setColor(c)}
                className='cursor-pointer hover:bg-slate-500'
              >
                {c}
              </div>
            );
          })}
        </div>
        <p>Size</p>
        <select
          className='border border-black bg-white px-2 py-1'
          name='size'
          onChange={(e) => setSize(e.target.value)}
        >
          <option value=''>__ __</option>
          {product.size?.map((s) => {
            return (
              <option value={s} key={s}>
                {s}
              </option>
            );
          })}
        </select>
        <div className='flex items-center gap-4'>
          <div
            className='text-4xl'
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          >
            -
          </div>
          <input
            className='w-[48px] rounded  border-2 border-black py-2 text-center'
            type='text'
            value={quantity}
          />
          <div className='text-4xl' onClick={() => setQuantity(quantity + 1)}>
            +
          </div>
        </div>
        <div className='group'>
          <button
            className='w-full border-2 border-slate-900 px-6 py-3 text-center text-xl uppercase lg:w-fit'
            onClick={handleClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
