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

// router.post('/my-cart/delete', (req, res, next)=>{
//    if(!req.session.cart){
//     return res.json('cart is empty!');
//   }

//   itemId = req.body.itemId;
//   var cart = new Cart(req.session.cart);
//   cart.remove(itemId)

//       req.session.cart = cart;
//       res.status(200).json(cart);
// })

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
      custAddress: {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      },
      cart: cart,
      status: ['OPEN']
    });

    
   
   //send confirmation email
    order.save() 
    .then(res.status(200).json({order, message: 'order has been submited!'}))
    .catch(err=>{
      console.log(err);
      res.status(500).json({error: err})
    });
   })

   router.post('/my-cart/clear', function(req, res, next){
     var cart = new Cart(req.session.cart)
     req.session.destroy();
      console.log(cart);
      
   })
 
  module.exports = router;