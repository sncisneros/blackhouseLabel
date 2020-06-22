//inserts

'use strict';
const mongoose = require('mongoose');
const Item = require('./models/item');
const Cart= require('./models/cart');
const Category = require('./models/category');
const User = require('./models/users');
const Order = require('./models/order');
const Discount = require('./models/discount');

//node blackhouse-inserts.js

//admin
const admin = new User({
    _id: new mongoose.Types.ObjectId(),
    admin:'TRUE',
    firstName:'System',
    lastName:'Admin',
    username:'blackhouse',
    password:'1234',
    hash:'$2b$10$6WG0xlJNJSvx1qL10CVRtOqjvRfI2BZg.yZSu4ZOya2CCaI0lhl9C',
    phoneNumber:'3235551111',
    email:'blackhouse@localhost.localdomain'
});

//items
const item1 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1,
    productName: 'Mini Skirt',
    description: 'Flattering short skirt, hugs hips. Sits just above knees. Wear with cute heels or thigh highs.',
    productPrice: '39.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item2 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 2,
    productName: 'Bomber Jacket',
    description: 'Cropped fit. Puffy sleeves with pockets on each side.',
    productPrice: '45.95',
    size: ['SMALL'],
    stock: ['LOWSTOCK'],
    imagePath: ['g67n.jpg', 'bds09o.jpb']
})

const item3 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 3,
    productName: 'Maxi Dress',
    description: 'Show off your curves in this hip hugging maxi. Ankle length, halter, with side splits up to thighs',
    productPrice: '25.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hfd.jpg', 'g8ik0.jpg']
})

const item4 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 4,
    productName: 'Graphic Tee',
    description: 'Slightly oversized, but hemmed at the hips for a more feminine look. Dress it up, dress it down.',
    productPrice: '29.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['j34yd.jpg', 'gt7j0.jpg']
})

const item5 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 5,
    productName: 'High Waist BF Jean',
    description: 'Sits just below the bellybutton, with a loose fit. Distressed. ',
    productPrice: '49.99',
    size: ['SMALL'],
    stock: ['INSTOCK'],
    imagePath:['r44yd.jpg', 'm00ghy.jpg']
})

const item6 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1,
    productName: 'Mini Skirt',
    description: 'Flattering short skirt, hugs hips. Sits just above knees. Wear with cute heels or thigh highs.',
    productPrice: '39.99',
    size: ['SMALL'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item7 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1,
    productName: 'Mini Skirt',
    description: 'Flattering short skirt, hugs hips. Sits just above knees. Wear with cute heels or thigh highs.',
    productPrice: '39.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item8 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 5,
    productName: 'High Waist BF Jean',
    description: 'Sits just below the bellybutton, with a loose fit. Distressed. ',
    productPrice: '49.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['r44yd.jpg', 'm00ghy.jpg']
})

const item9 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 6,
    productName: 'Long Sleeve Crop Top',
    description: 'Fitted top sits just above belly button, with long sleeves',
    productPrice: '22.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

//categories
const category1 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Active Wear',
    items: [item2]
})

const category2 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Bottoms',
    items: [item1, item5, item6, item7, item8]
})

const category3 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Dresses',
    items: [item3]
})

const category4 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Tops',
    items: [item4, item9]
})

// const discount1 = new Discount({
//     _id: new mongoose.Types.ObjectId(),
//     code: "NEW15",
//     isPercent: "false",
//     amount: "15",
//     expiryDate: "2020-30-06",
//     isActive: true
// })

async function run() {
    await mongoose.connect('mongodb://localhost/blackhouse');
    // clearing our collections
    await Category.remove();
    await Item.remove();
    await User.remove();
    await Order.remove();
    await Discount.remove();
    // adding data
    await admin.save();
    await item1.save();  
    await item2.save();
    await item3.save();  
    await item4.save();
    await item5.save();
    await category1.save();
    await category2.save();
    await category3.save();
    await category4.save();
    //await discount1.save();

    await mongoose.disconnect();
  }
  
  run();