var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var env = require('dotenv').config();
// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// const stripe = require('stripe')(stripeSecretKey);

var nodemailer = require('nodemailer');

const Cart = require('../models/cart');
const Order = require('../models/order');

//GET request for ALL items
  router.get('/my-cart', (req, res, next) => {
    console.log(req.session);
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

  // checkout and save order with confrim email
  router.post('/checkout', (req, res, next) => {
    var cart = new Cart(req.session.cart);
    var email = req.body.email;
    
    let order = new Order({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName : req.body.lastName,
      custEmail: email,
      custAddress: {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      },
      cart: cart,
      totalPrice: cart.totalPrice,
      status: ['OPEN']
    });


   
   //charge and save order
    order.save();

    // (async () => {
    //   const charge = await stripe.charges.create({
    //     amount: cart.totalPrice,
    //     currency: 'usd',
    //     source: 'tok_visa',
    //     receipt_email: email,
    //   });
    // })();

    //send email
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
          to: order.custEmail,
          subject: 'We Have Your Order!',
          text: 'We have received your order and it is currently processing! Once it is out for shipping, we will send you another email with your tracking number!',
          html: '<h3>We Got It!</h3> <b>Hey'+ order.firstName +'!</b> <p>This is a quick email to let you know we have recieved your order!</p>' +
          'Once your order has been processed, you will receive another email with your tracking' +
          'number and any update for your order.<br>'+
          'All orders are usually processed between 1-3 business days.<b>' +
          'If you have any other questions, please feel free to call us at : (818)284-5686' +
          'or email us at <u>inquiries@theblacklabel.com'
        };
  
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            return error;
          } 
            console.log('Email sent: ' + info.response);
            return res.status(200).json(info).redirect('/my-cart/clear');
          });  
    
   })

   router.post('/my-cart/clear', function(req, res, next){
     var cart = new Cart(req.session.cart)
     req.session.destroy();
      console.log(cart);
      
   })
 
  module.exports = router;