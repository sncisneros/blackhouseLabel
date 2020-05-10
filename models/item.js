'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new mongoose.Schema({
    productName : String,
    description : String,
    productPrice : Number,
    size:['SMALL', 'MEDIUM', 'LARGE', 'XLARGE'],
    stock: ['LOWSTOCK', 'INSTOCK'],
    imagePath: [{
        type: String
    }]
});

module.exports = mongoose.model('Item', itemSchema);