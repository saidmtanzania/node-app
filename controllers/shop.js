// jshint esversion:6
const Product = require('../models/product');
const Cart = require('../models/cart');


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

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail',{docTitle: product.title, product: product, path:"/products"});
  });
  
};

// Shopping Cart Page
exports.getCarts = (req, res, next) => {
  Cart.getCart( cart =>{
    Product.fetchAll( products => {
      const cartProducts = [];
      for ( products of products){
        const cartProductData = cart.products.find( prod => prod.id === products.id);
        if(cartProductData){
          cartProducts.push({productData:products, qty: cartProductData.qty});
          console.log(cartProducts);
        }
      }
       res.render("shop/cart", {
         // prods: products,
         docTitle: "Shop Cart",
         path: "/cart",
         products: cartProducts
       });
    });
  });
};
exports.postCarts = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
  Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
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
  res.render("shop/checkout", {
    prods: products,
    docTitle: "Shop Checkout",
    path: "/checkout"
  });
};