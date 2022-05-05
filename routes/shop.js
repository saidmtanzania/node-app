//Importing required modules
const express = require('express');
const path = require('path');

//Creating routing constant 
const router = express.Router();

//Homepage files
router.get('/',(req, res, next)=>{	
	//Sending response to the webpage
	res.sendFile(path.join(__dirname,'../','views','shop.html'));
	
	//This allow the request to continue execution to the next middleware
	// next();
});

//Exporting this modules to be used out of this function
module.exports = router;
