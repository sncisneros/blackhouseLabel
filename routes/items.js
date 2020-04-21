var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Item = require('../models/item');

//GET request for ALL items
  router.get('/', (req, res) => {
    Item.find ({}, (error, items) => {
        res.json(items);
    })
})
  
  module.exports = router;