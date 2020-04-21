var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Cart = require('../models/cart');

//GET request for ALL items
  router.get('/', (req, res) => {
    Cart.find ({}, (error, carts) => {
        res.json(carts);
    })
})
  
  module.exports = router;