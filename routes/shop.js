// jshint esversion:6
//Importing required modules
const express = require('express');
const path = require('path');
const rutDir = require('../util/path');

//Creating routing constant 
const router = express.Router();

//Homepage files
router.get('/',(req, res, next)=>{	
	//Sending response to the webpage
	res.sendFile(path.join(rutDir,'..','views','shop.html'));
	
	//This allow the request to continue execution to the next middleware
	// next();
});

//Exporting this modules to be used out of this function
module.exports = router;
