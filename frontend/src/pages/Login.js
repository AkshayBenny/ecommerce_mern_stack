import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex items-center justify-center'>
      <form className='flex flex-col items-center space-y-10 border-4'>
        <h1>Sign In</h1>
        <input
          type='text'
          placeholder='username'
          className='border-2 border-black px-2 py-1'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='password'
          className='border-2 border-black px-2 py-1'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='bg-black px-12 py-2 text-white'
          onClick={handleClick}
        >
          Login
        </button>
        <button className='border-b-black'>Create an account</button>
      </form>
    </div>
  );
}

export default Login;
