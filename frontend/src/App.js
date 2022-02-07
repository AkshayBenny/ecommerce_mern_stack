import { Switch, Route } from 'react-router-dom';

//components imports
import React from 'react';
import Navbar from './components/Navbar';

//pages import
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='select-none'>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/products/:category' exact>
          <ProductList />
        </Route>

        <Route path='/product/:id' exact>
          <Product />
        </Route>

        <Route path='/cart'>
          <Cart />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
    //newsletter and footer at 1st 1:21:20
  );
}

export default App;
