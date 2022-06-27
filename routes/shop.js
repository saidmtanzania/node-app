//jshint esversion:6
const express = require("express");
const productsController = require('../controllers/products');
const router = express.Router();

router.get("/", productsController.getProducts);
router.get('/products', productsController.getProducts);
router.get('/cart');
router.get('/checkout');

module.exports = router;
