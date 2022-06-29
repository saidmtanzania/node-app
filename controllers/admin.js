//jshint esversion:6
const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
  res.render("admin/add-product", {
    docTitle: "/admin/add-product",
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
