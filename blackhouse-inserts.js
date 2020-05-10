//inserts

'use strict';
const mongoose = require('mongoose');
const Item = require('./models/item');
const Cart= require('./models/cart');
const Category = require('./models/category');

//node blackhouse-inserts.js

//items
const item1 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'Mini Skirt',
    description: 'Flattering short skirt, hugs hips. Sits just above knees. Wear with cute heels or thigh highs.',
    productPrice: '39.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item2 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'Bomber Jacket',
    description: 'Cropped fit. Puffy sleeves with pockets on each side.',
    productPrice: '45.95',
    size: ['SMALL'],
    stock: ['LOWSTOCK'],
    imagePath: ['g67n.jpg', 'bds09o.jpb']
})

const item3 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'Maxi Dress',
    description: 'Show off your curves in this hip hugging maxi. Ankle length, halter, with side splits up to thighs',
    productPrice: '25.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hfd.jpg', 'g8ik0.jpg']
})

const item4 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'Graphic Tee',
    description: 'Slightly oversized, but hemmed at the hips for a more feminine look. Dress it up, dress it down.',
    productPrice: '29.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['j34yd.jpg', 'gt7j0.jpg']
})

const item5 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'High Waist BF Jean',
    description: 'Sits just below the bellybutton, with a loose fit. Distressed. ',
    productPrice: '49.99',
    size: ['SMALL'],
    stock: ['INSTOCK'],
    imagePath:['r44yd.jpg', 'm00ghy.jpg']
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
    items: [item1, item5]
})

const category3 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Dresses',
    items: [item3]
})

const category4 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Tops',
    items: [item4]
})



async function run() {
    await mongoose.connect('mongodb://localhost/blackhouse');
    // clearing our collections
    await Category.remove()
    await Item.remove();
    // adding data
    await item1.save();  
    await item2.save();
    await item3.save();  
    await item4.save();
    await item5.save();
    await category1.save();
    await category2.save()
    await category3.save();
    await category4.save();

    await mongoose.disconnect();
  }
  
  run();