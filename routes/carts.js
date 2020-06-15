var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Cart = require('../models/cart');
const Order = require('../models/order');

//GET request for ALL items
  router.get('/my-cart', (req, res, next) => {
    if(!req.session.cart){
      return res.json('cart is empty!');
    }
    var cart = new Cart(req.session.cart);
    console.log(req.session.cart);
    res.status(200).json(cart)
});

  router.get('/checkout', (req, res, next) => {
    if(!req.session.cart){
      return res.json('cart is empty!');
    }
    var cart = new Cart(req.session.cart);
    res.status(200).json(cart.totalPrice);
  });

  router.post('/checkout', (req, res, next) => {
    var cart = new Cart(req.session.cart);
    
    let order = new Order({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName : req.body.lastName,
      custEmail: req.body.email,
      custAddress: req.body.address,
      cart: cart,
      status: ['OPEN']
    });
   
    order.save()
    .then(res.status(200).json({order, message: 'order has been submited!'}))
    .catch(err=>{
      console.log(err);
      res.status(500).json({error: err})
    });
    
   })

 
// router.get('/my-cart/:itemId/removeFromCart', function(req, res, next){
//   var cart = new Cart(req.session.cart ? req.session.cart : {} );

//   Item.findOne({_id: req.params.itemId}, function(error, item){
//       if (error){
//           return res.status(404).json('OOPS, SOMETHING WENT WRONG HONEY..');
//       }

//       cart.add(item, item.id);
//       req.session.cart = cart;
//       //testing purposes

//       console.log(req.session.cart);
//       res.status(200).json(req.session.cart);
//   });
// });
  
  module.exports = router;