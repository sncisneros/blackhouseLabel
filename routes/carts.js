var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Cart = require('../models/cart');

//GET request for ALL items
  router.get('/my-cart', (req, res) => {
    console.log(req.session.cart);
})

  
  module.exports = router;