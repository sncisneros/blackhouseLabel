var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const User = require('../models/users');
const Item = require('../models/item');
const Inventory = require('../models/inventory');
const Order = require('../models/order');

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post('/admin/login', function (req, res, next) {
    if(!req.body.username || !req.body.password){
        return res.status(400).json({msg : 'Username and/or Password fields are empty'});
    }

    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (!user) return res.status(400).json({msg : 'User not found.'});

        bcrypt.hash(req.body.password, user.hash, function (err, h) {
            if (user.hash == h) {
                res.json({
                    token: jwt.sign({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        id: user.id,
                        admin: user.admin[0]
                    }, jwtSecret)
                });
            } else {
                return res.status(403).json({msg:'Password not valid.'})
            }
         });
    });
});

router.get('/admin/orders', function(req, res, next){
    Order.find().or({status: 'OPEN'}, {status:'INPROGRESS'}).populate('orders').exec( function (err, orders) {
        if(err) { return handleError(res, err); }
            var count = orders.length;
            return res.status(200).json({'orders': orders, 'count': count});
    })
    
});

router.post('/admin/orders/:orderId/status/:status', function(req, res, next){
    let orderId = req.params.orderId;
    let status = req.params.status;
    console.log(status);
    Order.findByIdAndUpdate(orderId, {status: [status]}, function(error, order){
        if(error) return error;
        return res.status(200).json(order);
    })
})


router.get('/admin/inventory', function(req, res, next){
    let token = req.headers.authorization;
    let decodedUser = jwt.verify(token, jwtSecret);

    var id = req.query.productSKU;
    var size = req.query.size;
    
    Item.countDocuments({_id: id, productSKU: productSKU}, function(err, results){
        if(err){
            res.send(err);
        } if(decodedUser.admin === 'TRUE') {
            return res.status(200).json(results);
        } else {
            return res.status(403).json('UNAUTHORIZED')
        }
    })
});

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


module.exports = router;