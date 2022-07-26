//jshint esversion:6
const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
  res.render("admin/edit-product", {
    docTitle: "Adding Product",
    path: "/admin/add-product",
    editing: false
  });
};

exports.postAddProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProducts = (req, res, next) => {
  // res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if(!product){
      res.redirect("/");
    }
    res.render("admin/edit-product", {
    docTitle: "Edit Product",
    path: "/admin/edit-product",
    editing: editMode,
    product: product
  });
  });
};

exports.postEditProducts = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;

  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect("/admin/products");
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