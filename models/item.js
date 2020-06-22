'use strict';
const mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const Schema = mongoose.Schema;

let itemSchema = new mongoose.Schema({
    productSKU: Number,
    productName : String,
    description : String,
    productPrice : Number,
    size:['SMALL', 'MEDIUM', 'LARGE', 'XLARGE'],
    stock: ['LOWSTOCK', 'INSTOCK'],
    color: [{
        name: String
    }],
    imagePath: [{
        type: String
    }]
});

itemSchema.plugin(mongoose_fuzzy_searching, {fields: ['productName', 'description']});
module.exports = mongoose.model('Item', itemSchema);