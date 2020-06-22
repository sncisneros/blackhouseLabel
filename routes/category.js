var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Category = require('../models/category');
const Item = require('../models/item');
const Cart = require('../models/cart');

//get all items within a category
router.get('/category/:categoryName', function(req, res, next){
    let id = req.params.categoryName;
    //array of embedded items

        Category.findOne({categoryName: id}).populate('items').exec( function (err, categories) {
            if(err) { return handleError(res, err); }
            return res.status(200).json(categories.items);
          });

   
})



//get item from category by itemid
router.get('/category/:categoryName/:productSKU', function(req, res, next){
    let id = req.params.categoryName;

    Category.find({categoryName: id}).populate('items').exec( function(err, category){
        Item.findOne({_id: req.params.productSKU}, function(error, item){
            return res.status(200).json(item)
        })
    })
})


//update cart with added item
router.get('/category/:categoryName/:productSKU/add', function(req, res, next){
    var cart = new Cart(req.session.cart ? req.session.cart : {} );
    const size = req.params.size;
    var id  = req.params.productSKU;

    Item.findOne({productSKU: id}, function(error, item){
        console.log(item);
        if (error){
            return res.status(404).json('OOPS, SOMETHING WENT WRONG HONEY..');
        }

        cart.add(item, item.id);
        req.session.cart = cart;
        //testing purposes
        console.log(req.session.cart);
        res.status(200).json(req.session.cart);
    });
});
    
module.exports = router;