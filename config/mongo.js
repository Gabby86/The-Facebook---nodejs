const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Nodejs:<password>@cluster0.gcgw1d4.mongodb.net/')
.then( res =>console.log('db is connected'))
.catch(err =>(err));
