// jshint esversion:6
const Product = require("../models/product");
const Cart = require("../models/cart");

//Shopping Home Page
exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then( ([rows]) => {
      res.render("shop/index", {
        prods: rows,
        docTitle: "My Shop",
        path: "/",
      });
    })
    .catch( err => {
      console.log(err);
    });
};

//Shopping List of Product Page
exports.getProducts = (req, res, next) => {
  Product.fetchAll().then( ([rows])=>{
    res.render("shop/product-list", {
      prods: rows,
      docTitle: "All Products",
      path: "/products",
    });

  }).catch( err =>{
    console.log(err);
  });

  
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([product]) => {
      res.render("shop/product-detail", {
        docTitle: product[0].title,
        product: product[0],
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
  
};

// Shopping Cart Page
exports.getCarts = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (products of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === products.id
        );
        if (cartProductData) {
          cartProducts.push({
            productData: products,
            qty: cartProductData.qty,
          });
        }
      }
      res.render("shop/cart", {
        // prods: products,
        docTitle: "Shop Cart",
        path: "/cart",
        products: cartProducts,
      });
    });
  });
};
exports.postCarts = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
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
  res.render("shop/checkout", {
    prods: products,
    docTitle: "Shop Checkout",
    path: "/checkout",
  });
};
