// jshint esversion:11

const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "Cart.json"
);

module.exports = class Cart {
    // constructor(){
    //     this.products = [];
    //     this.totalPrice = 0;
    // }
    static addProduct(id, productPrice){

        //Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
          let cart = { products: [], totalPrice: 0 };
          if (!err) {
            cart = JSON.parse(fileContent);
          }

          //Analyze the cart => Find existing products
          const existingProduct = cart.products.find((prod) => prod.id === id);
          let updatedProduct;
          
          // Add new Product/increase quantity
          if (existingProduct) {
            updatedProduct = { ...existingProduct };
            updatedProduct.qty = updatedProduct.qty + 1;
          }else{
            updatedProduct = { id: id, qty: 1};
          }
          cart.totalPrice = cart.totalPrice + productPrice;

        });
    }
};