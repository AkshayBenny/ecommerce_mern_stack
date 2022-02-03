import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

function Categories() {
  return (
    <div className='my-[240px] gap-3 px-[16px] lg:grid lg:grid-cols-3 lg:px-[60px]'>
      {categories.map((item) => {
        return <CategoryItem item={item} />;
      })}
    </div>
  );
}

export default Categories;
