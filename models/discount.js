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
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    }
});

//create function to expire discount

module.exports = mongoose.model('Discount', discountSchema);