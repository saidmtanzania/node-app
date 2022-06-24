// jshint esversion:6
const Product = require('../models/product');



exports.getAddProducts = (req, res, next) => {
  // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    docTitle: "Add Product",
    path: "admin",
    activeProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};


exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};


exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    docTitle: "My Shop",
    path: "shop",
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};