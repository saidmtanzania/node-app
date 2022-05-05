//Import usable modules
const express = require('express');
const bodyParser = require('body-parser');

//Create Express Application by storing at constant app
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//Loading files form routes folder to main app.js files
const adminRoute = require('./routes/admin');

//Loading Homopage for ant request comes with '/'
app.use('/',(req, res, next)=>{	
	
	//Sending response to the webpage
	res.send('<h1>Hello from Express</h1>');
	
	//This allow the request to continue execution to the next middleware
	// next();
});
	
//Server Listening port we will use :3000
app.listen(3000, ()=>{
	console.log('server is up and running at localhost:3000');
	});