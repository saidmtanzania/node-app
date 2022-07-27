//jshint esversion:6
const express = require("express");
const shopController = require('../controllers/shop');
const router = express.Router();

router.get("/", shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCarts);

router.post('/cart', shopController.postCarts);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get("/orders", shopController.getOrders);

router.get('/checkout', shopController.getCheckouts);

module.exports = router;
