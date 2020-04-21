//inserts

'use strict';
const mongoose = require('mongoose');
const Item = require('./models/item');
const Cart= require('./models/cart');

//items
const item1 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'Mini Skirt',
    description: 'Flattering short skirt, hugs hips. Sits just above knees. Wear with cute heels or thigh highs.',
    productPrice: '39.99'
})

const item2 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productName: 'Bomber Jacket',
    description: 'Cropped fit. Puffy sleeves with pockets on each side.',
    productPrice: '45.95'
})

//carts
const cart1 = new Cart({
    totalCost: '72.99',
    items:[item1, item2]
})

async function run() {
    await mongoose.connect('mongodb://localhost/blackhouse');
    // clearing our collections
    await Item.remove();
    await Cart.remove();
    // adding data
    await item1.save();  
    await item2.save();  
    await cart1.save();

    await mongoose.disconnect();
  }
  
  run();