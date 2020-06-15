const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inventorySchema = new mongoose.Schema({
    item: {
        type : Schema.Types.ObjectId,
        ref : 'Item'
    },
    itemQuantity: Number,
    
})

module.exports = mongoose.model('Inventory', inventorySchema);
