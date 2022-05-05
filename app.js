//Import usable modules
const express = require('express');
const bodyParser = require('body-parser');
const path  = require('path');

//Create Express Application by storing at constant app
const app = express();


//Importing routing files form routes folder to main app.js files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Google about urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//NOTE:::On using routing Order matters!!!
//using adminRoute and shopRoute on app.js
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//Sending 404 for an input data
app.use((req, res, next)=>{
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
//Loading Homopage for ant request comes with '/'

//Server Listening port we will use :3000
app.listen(3000, ()=>{
	console.log('server is up and running at localhost:3000');
	});