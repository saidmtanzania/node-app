//Import required modules
const express = require('express');
const path = require('path');
const rutDir = require('../util/path');


//Creating routing from express
const router = express.Router();
 
router.get('/add-product',(req, res, next)=>{
 	
	//Sending response to the webpage
 	res.sendFile(path.join(rutDir,'..', 'views', 'add-product.html'));
 	
	//This allow the request to continue execution to the next middleware
 	// next();
 });
 // Receiving /post from input data
router.post('/add-product',(req, res, next)=>{
 	console.log(req.body);
 	res.redirect('/');
 })
 
// Exporting routing function
 module.exports = router;