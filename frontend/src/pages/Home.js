import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Products from '../components/Products';

function Home() {
  return (
    <div>
      <Announcement />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
