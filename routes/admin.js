//jshint esversion:6
const path = require('path');
const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();


router.get("/add-product", adminController.getAddProducts);

router.get("/edit-product/:productId", adminController.getEditProducts);

router.post("/edit-product", adminController.postEditProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProducts);

module.exports = router;
