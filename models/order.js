const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var nodemailer = require('nodemailer');

let orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    custEmail: String,
    custAddress: {
      address: String,
      city: String,
      state: String,
      country: String,
      zip: String
    },
    cart: {
        type : Object,
        required: true
    },
    totalPrice: Number,
    status: ['OPEN','INPROGRESS', 'COMPLETED'],
    trackingNum:{
        type: String,
    }
    
})

var custAdress = Schema({address: String, city: String, state: String, zip: Number});


this.orderProcessedEmail = function(){

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "theblackhouselabel@gmail.com",
          pass: ""
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
        from: '"The Blackhouse Label" <theblackhouselabel@gmail.com>',
        to: this.order.email,
        subject: 'We Have Your Order!',
        text: 'Hey! We have received your order and it is currently procession! Once it is out for shipping, we will send you another email with your tracking number!',
        html: '<b>Hey !</b> <p>We received your order and currently processing it</p>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return error;
        } 
          console.log('Email sent: ' + info.response);
          return res.status(200).json(info);
        });
        
}

module.exports = mongoose.model('Order', orderSchema);
