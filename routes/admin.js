//Import required modules
import express = require('express');

//Creating routing from express
const router = express.Router();
 
app.get('/add-product',(req, res, next)=>{
 	
	//Sending response to the webpage
 	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
 	
	//This allow the request to continue execution to the next middleware
 	// next();
 });
 // Receiving /post from input data
app.post('/product',(req, res, next)=>{
 	console.log(req.body);
 	res.redirect('/');
 })
 
 
// Exporting routing function
 module.exports = router;