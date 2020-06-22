var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

const User = require('../models/users');
const Item = require('../models/item');
const Inventory = require('../models/inventory');
const Order = require('../models/order');
const Discount = require('../models/discount');

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;


//return open orders and the count
router.get('/admin/orders', function(req, res, next){
    Order.find().or({status: 'OPEN'}, {status:'INPROGRESS'}).populate('orders').exec( function (err, orders) {
        if(err) { return handleError(res, err); }
            var count = orders.length;
            return res.status(200).json(orders);
    })
    
});

//return specific order by id
router.get('/admin/orders/:orderId', function(req, res, next){
    Order.findById(req.params.orderId).exec(function(err, order){
        if(err){ return err }
        return res.status(200).json(order);
    })
})


//update order status
router.post('/admin/orders/:orderId/status/:status', function(req, res, next){
    let orderId = req.params.orderId;
    const _status = req.params.status;
    let trackingNum = req.body.trackingNum;

    console.log(_status);
    Order.findByIdAndUpdate(orderId, {status: [_status], trackingNum: trackingNum}, function(error, order){
        if(error) return error;
        return res.status(200).json(order);
    })
})

//get inventory count for productSKU
router.get('/admin/inventory', function(req, res, next){
    let token = req.headers.authorization;
    let decodedUser = jwt.verify(token, jwtSecret);

    var id = req.query.productSKU;
    
    Item.countDocuments({productSKU: id}, function(err, results){
        if(err){
            res.send(err);
        } if(decodedUser.admin === 'TRUE') {
            return res.status(200).json(results);
        } else {
            return res.status(403).json('UNAUTHORIZED')
        }
    })
});

//creat new inventory item
router.post('/admin/inventory', function(req, res, next){

    let token = req.headers.authorization;
    let decodedUser = jwt.verify(token, jwtSecret);

    if( decodedUser.admin === 'TRUE' ){
         let item = new Item(req.body);
        item.save()
        .then(res.status(200).send(item))
        .catch(err=>{
            return res.json(err);
        });
    } else {
        return res.status(403).json("UNAUTHORIZED");
     }
});

//remove inventory item
router.delete('/admin/inventory/:productSKU', function(req, res, next){

    Item.deleteMany({ productSKU: req.params.productSKU }, function (err) {
        if(err){
        return (err);
        } else {
        res.status(200).json("Successful Deletion");
        }
      });
})

//create discount, update if exist
router.post('/admin/createDiscount', function(req, res, next){
    let newCode = req.body.newCode;
    let newDiscount;

    Discount.countDocuments({code: newCode}).populate('discounts').exec(function(err, results){
        console.log(results)
                        if(err){
                            return err;
                        } else if(results > 0){
                            Discount.findOneAndUpdate({code: newCode}, {
                                expiryDate: req.body.expiryDate
                            }, function(err, discount){ 
                                if(err)
                                    return error;
                                    return res.status(200).json('Updated!: ' + discount);
                                }) 
                            } else {
                                newDiscount = new Discount({
                                code: newCode,
                                isPercent: req.body.percent,
                                amount: req.body.amount,
                                expiryDate: req.params.expiryDate,
                                isActive: true
                                })
                                newDiscount.save()
                                .then(res.status(200).send('New Discount Added! ' + newDiscount))
                                .catch(err=>{
                                    return res.json(err);
                                })
                             }
                    
                });
            });

router.get('/admin/discounts', function(req, res, next){
    Discount.find({isActive: true}).populate('discounts').exec(function(err, discounts){
        if(err){
            return err;
        } return res.status(200).json(discounts);
    });
})
           

//send subscription emails
router.post('/admin/group-email', function(req, res, next){

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
        from: 'sfierce07@gmail.com',
        to: 'snicole.cisneros@gmail.com',
        subject: 'Sending Email using Node.js',
        html: '<p><center>' + req.body.text + '</center></p>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return error;
        } 
          console.log('Email sent: ' + info.response);
          return res.status(200).json(info);
        });
        
    
})



module.exports = router;