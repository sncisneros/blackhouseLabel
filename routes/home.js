var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Category = require('../models/category');
const Cart = require('../models/cart');

//GET request for ALL categories, returning only category name
  router.get('/', (req, res) => {
    Category.find({}, { _id : 0, categoryName : 1 }, function (err, categories) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(categories);
      });
})
  

 module.exports = router;