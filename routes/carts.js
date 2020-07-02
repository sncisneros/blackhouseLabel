var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var env = require('dotenv').config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

var nodemailer = require('nodemailer');

const Cart = require('../models/cart');
const Order = require('../models/order');

// for debugging
router.get('/getsession', function(req, res) {
  console.log(`Session ID: ${req.session.id}`);
  res.status(200).json({ sessionid: req.session.id });
});

//GET request for cart items
  router.get('/my-cart', (req, res, next) => {
    console.log(req.session);
    if(!req.session.cart){
      return res.json('cart is empty!');
    }
    var cart = new Cart(req.session.cart);
    console.log(req.session.cart);
    res.status(200).json(cart)
});

//create and save cart as order
router.post('/my-cart', (req, res, next) => {
  var cart = new Cart(req.session.cart);
  
  let order = new Order(req.body.order);
  order.cart = cart;
  var email = order.custEmail;
  console.log(email);

  //send confirmation email
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "sfierce07@gmail.com",
      pass: "m4d3fre$h"
    }
  });

  transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });

  var mailOptions = {
    from: '"The Blackhouse Label" <sfierce07@gmail.com>',
    to: email,
    subject: 'We Have Your Order!',
    text: 'We have received your order and it is currently processing! Once it is out for shipping, we will send you another email with your tracking number!',
    html: '<h3>We Got It!</h3> <b>Hey ' + order.firstName + ' !</b> <p>This is a quick email to let you know we have recieved your order!</p>Once your order has been processed, you will receive another email with your trackingnumber and any update for your order.<br>All orders are usually processed between 1-3 business days.<b>If you have any other questions, please feel free to call us at : (818)284-5686or email us at <u>inquiries@theblacklabel.com'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return error;
    } 
      console.log('Email sent: ' + info.response);
      order.save();
      return res.status(200).json(info);
    });  

})


  router.get('/checkout', (req, res, next) => {
   
    
  });

  // chackout and process payment
  router.post('/checkout', //token({ required: true })/,
   (req, res, next) => {
   
   //charge and save order
    
//--------------------------------------------------------------------
   const stripeToken = req.body.stripeToken;
   const price = cart.totalPrice;
   const priceInPence = price * 100;
      stripe.charges.create({
      amount: priceInPence,
      currency: 'usd',
      source: stripeToken,
      capture: false,  // note that capture: false
   }).then(chargeObject => {
    order.save();
    stripe.charges.capture(chargeObject.id)
 }).catch(error => {
  res.status(400).json(err).end();
  stripe.refunds.create({charge: chargeObject.id});
   });
  //  ---------------------------------------------------------------

     
   })
 
  module.exports = router;