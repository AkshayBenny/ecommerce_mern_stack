import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import Success from './pages/Success';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
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

        <Route path='/cart' exact>
          <Cart />
        </Route>

        <Route path='/login' exact>
          {user ? <Redirect to='/' /> : <Login />}
        </Route>

        <Route path='/register' exact>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
        <Route path='/success' exact>
          <Success />
        </Route>
      </Switch>
    </div>
    //newsletter and footer at 1st 1:21:20
  );
}

export default App;
