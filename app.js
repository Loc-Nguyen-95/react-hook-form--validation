const path = require('path');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

// call express
const app = express();

//body parser 
app.use(bodyParser.urlencoded({ extended: false })) // string/array ??

//static file
app.use(express.static(path.join(__dirname, 'public')))

//view engine
app.set('view engine', 'ejs'); //view engine: ejs 
app.set('views', 'views');     //views : views folder

// use midleware
app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.listen(5001);