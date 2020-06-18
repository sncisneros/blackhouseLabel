var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let discountSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    isPercent: {
        type: Boolean,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: String,
        required: true,
        default: '',
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
});


module.exports = mongoose.model('Discount', discountSchema);