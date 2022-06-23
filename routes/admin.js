//jshint esversion:6
const path = require('path');
const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();




router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postAddProducts);






module.exports = router;
