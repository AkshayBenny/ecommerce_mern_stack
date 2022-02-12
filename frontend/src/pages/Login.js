import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
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
          className={`bg-black px-12 py-2 text-white ${
            !isFetching && 'disabled disabled:bg-slate-700'
          }`}
          disabled={isFetching}
          onClick={handleClick}
        >
          Login
        </button>
        {error && (
          <div className='flex gap-6'>
            <p className='text-red-600'>Something went wrong</p>
            <span>
              <button
                className='border-b-2 border-black'
                onClick={() => {
                  setUsername('');
                  setPassword('');
                }}
              >
                Try again
              </button>
            </span>
          </div>
        )}
        <button className='border-b-black'>Create an account</button>
      </form>
    </div>
  );
}

export default Login;
