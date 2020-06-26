'use strict';
const mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const Schema = mongoose.Schema;

let itemSchema = new mongoose.Schema({
    productSKU: Number,
    productName : String,
    description : String,
    productPrice : Number,
    variation: [{
        size: String,
        color: String,
        quantity: Number,
    }],
    imagePath: [{
        type: String
    }]
});

itemSchema.plugin(mongoose_fuzzy_searching, {fields: ['productName', 'description']});
module.exports = mongoose.model('Item', itemSchema);