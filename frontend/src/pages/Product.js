import React from 'react';

function Product() {
  return (
    <div>
      <div>
        <img src='' alt='' />
      </div>
      <div>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          corporis, nostrum fuga ducimus iusto commodi tenetur, ratione animi
          totam eius illum deserunt eveniet praesentium perferendis debitis,
          quos qui placeat officiis culpa porro! Natus vero facilis molestias
          rem ex suscipit, iusto aut quaerat commodi porro. Illum vero aliquid
          ipsum maxime mollitia.
        </p>
        <h1>Price</h1>
        <p>Color</p>
        <select name='size'>
          <option value='md'>MD</option>
          <option value='lg'>LG</option>
          <option value='xl'>XL</option>
          <option value='xxl'>XXL</option>
        </select>
      </div>
    </div>
  );
}

export default Product;
