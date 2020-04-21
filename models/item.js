'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new mongoose.Schema({
    productName : String,
    description : String,
    productPrice : Number
});

module.exports = mongoose.model('Item', itemSchema);