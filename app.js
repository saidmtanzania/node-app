//Import usable modules
const express = require('express');
const bodyParser = require('body-parser');

//Create Express Application by storing at constant app
const app = express();
	  app.use(bodyParser.urlencoded({extended:true}));

app.use('/add-product',(req, res, next)=>{	
	//Sending response to the webpage
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
	
	//This allow the request to continue execution to the next middleware
	// next();
});	
app.post('/product',(req, res, next)=>{
	console.log(req.body);
	res.redirect('/');
})
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