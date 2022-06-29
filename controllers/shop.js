// jshint esversion:6
const Product = require('../public/css/product');


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
exports.getCarts = (req, res, next) => {
    res.render("shop/cart", {
      // prods: products,
      docTitle: "Shop Cart",
      path: "/cart"
    });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    // prods: products,
    docTitle: "Shop Orders",
    path: "/orders",
  });
};


//Shop Checkout Page
exports.getCheckouts = (req, res, next) => {
  res.render("shop/cart", {
    prods: products,
    docTitle: "Shop Checkout",
    path: "/checkout"
  });
};