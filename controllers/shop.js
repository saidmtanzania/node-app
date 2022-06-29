// jshint esversion:6
const Product = require('../models/product');


//Shop Home Page
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      docTitle: "My Shop",
      path: "/"
    });
  });
};


//Shop List of Product Page
exports.getProducts = (req, res, next) => {
  Product.fetchAll( products => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "All Products",
      path: "/products"
    });
  });
};


// Shop Cart Page
exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
      prods: products,
      docTitle: "Shop Cart",
      path: "/cart"
    });
};


//Shop Checkout Page
exports.getCheckout = (req, res, next) => {
  res.render("shop/cart", {
    prods: products,
    docTitle: "Shop Checkout",
    path: "/checkout"
  });
};