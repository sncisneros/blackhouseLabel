var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/users');

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;


//log into admin portal
router.post('/login', function (req, res, next) {
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

router.post('/logout', function(req, res, next){
    
})

//create a user and hash password
router.post('/login/create-user', function (req, res, next) {
    let password = req.body.password;
    let newUser ;
    let hash;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      console.log(hash);
      newUser = new User({
          admin: 'TRUE',
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          hash: hash,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
      })
      newUser.save()
        .then(res.status(200).send(newUser))
        .catch(err => {
          console.log(err);
        });
    });
  });
  
  module.exports = router;