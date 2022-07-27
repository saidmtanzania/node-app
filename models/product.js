// jshint esversion:6

const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    
  }

  static deleteById(id) {
    
  }

  static fetchAll(cb) {
    
  }

  static findById(id, cb) {
    
  }
};
