const express = require('express');
const app = express();
const route = require('./config/route');
const mongoose = require('./config/mongo');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen(2000, () => {
  console.log('Server is running on port 2000')
});
