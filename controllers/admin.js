//jshint esversion:6
const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
  res.render("admin/add-product", {
    docTitle: "Adding Product",
    path: "/admin/add-product",
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
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "All Admin Product",
      path: "/admin/products",
    });
  });
};