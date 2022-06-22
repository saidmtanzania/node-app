//jshint esversion:6
const path = require('path');
const express = require("express");
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir,'views', 'shop.html'));
  const product = adminData.products;
  res.render("shop", {
    prods: product,
    docTitle: "My Shop",
    path: "shop",
    hasProduct: product.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
