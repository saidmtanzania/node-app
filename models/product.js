// jshint esversion:6
// const products = [];
const fs = require('path');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save(){
        // products.push(this);
        const p = path.join(path.dirname(process.mainModule.filename));
    }

    static fetchAll(){
        return products;
    }
};
