const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

app.get('/api/test', () => {
  console.log('working--------------');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend running server on port ${process.env.PORT}`);
});
