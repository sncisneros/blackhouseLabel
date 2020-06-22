const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new mongoose.Schema({
    categoryName: String,
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    imagePath: String
})

module.exports = mongoose.model('Category', categorySchema);