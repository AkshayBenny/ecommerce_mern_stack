import React from 'react';

function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <input type='text' placeholder='username' />
      <input type='text' placeholder='password' />
      <button>Login</button>
      <button>Create an account</button>
    </div>
  );
}

export default Login;
