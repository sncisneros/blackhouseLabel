const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    custEmail: String,
    custAddress: {type: String, required: true},
    cart: {
        type : Object,
        required: true
    },
    status: ['OPEN','INPROGRESS', 'COMPLETED']
    
})

module.exports = mongoose.model('Order', orderSchema);
