const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cartSchema = new mongoose.Schema({
    totalCost : Number,
    items : [{
        type : Schema.Types.ObjectId,
        ref : 'Item'
    }]
})

module.exports = mongoose.model('Cart', cartSchema);
