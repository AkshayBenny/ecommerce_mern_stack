import React from 'react';

function Register() {
  return (
    <div>
      <h1>Create an account</h1>
      <input type='text' placeholder='name' />
      <input type='text' placeholder='last name' />
      <input type='text' placeholder='username' />
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <input type='text' placeholder='confirm password' />
      <button>Create</button>
    </div>
  );
}

export default Register;
