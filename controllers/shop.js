// jshint esversion:6
const Product = require('../public/css/product');


//Shopping Home Page
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      docTitle: "My Shop",
      path: "/"
    });
  });
};


//Shopping List of Product Page
exports.getProducts = (req, res, next) => {
  Product.fetchAll( products => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "All Products",
      path: "/products"
    });
  });
};


// Shopping Cart Page
exports.getCarts = (req, res, next) => {
    res.render("shop/cart", {
      // prods: products,
      docTitle: "Shop Cart",
      path: "/cart"
    });
};

//Shopping Orders Page
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    // prods: products,
    docTitle: "Shop Orders",
    path: "/orders",
  });
};


//Shopping Checkout Page
exports.getCheckouts = (req, res, next) => {
  res.render("shop/cart", {
    prods: products,
    docTitle: "Shop Checkout",
    path: "/checkout"
  });
};