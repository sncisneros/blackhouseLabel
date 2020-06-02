var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Category = require('../models/category');
const Item = require('../models/item');

//GET request for ALL categories, returning only category name
  router.get('/home', (req, res) => {
    Category.find(function (err, categories) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(categories);
      });
})

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/search", function(req, res) {
  if (req.query.search) {
     const regex = new RegExp(escapeRegex(req.query.search), 'gi');
     Item.find({ productName: regex }, function(err, items) {
         if(err) {
             console.log(err);
         } else {
           console.log(items);
            res.status(200).json(items);
         }
     }); 
  }
});

  

 module.exports = router;