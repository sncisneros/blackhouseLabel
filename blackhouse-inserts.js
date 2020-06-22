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
    productSKU: 1001,
    productName: 'Kayla Tie-Dye Two Piece Set',
    description: 'Comes with a bodysuit and a midi skirt.' + 
    'Has pops of purple, orange, lime green, burgundy and pink. '+
    'Skirt can be worn high waisted. '+
    'Skirt and Top are slightly see through and made of a mesh material' +
    'Skirt has an elastic band to provide stretch' +
    'Model is 5’0 wearing a Small',
    productPrice: '10.99',
    size: ['SMALL'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item2 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1002,
    productName: 'Sage Two-Piece Pants Set',
    description: 'This two-piece set is versatile in style.' + 
   'Top can be tied to your liking.'+ 
    'Pants are high waisted with a slighted belled bottom.' + 
   'Has Pockets.' +
    'Pants are long and are tall girl friendly. ' +
    'Has an elastic band to provide a stretch.' +
    'Model is 5’0 wearing a Small',
    productPrice: '45.95',
    size: ['SMALL'],
    stock: ['LOWSTOCK'],
    imagePath: ['g67n.jpg', 'bds09o.jpb']
})

const item3 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1003,
    productName: 'Off The Chains Blazer',
    description: 'a statement piece that every woman needs.' +
    'Blazer comes down at a V angle in the front. ' +
    'Chains hanging are gold and can easily hang below ' +
    'Model is 5’0 wearing a Small',
    productPrice: '25.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hfd.jpg', 'g8ik0.jpg']
})

const item4 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1004,
    productName: 'Destroyed Denim Jeans',
    description: 'These Jeans come in a light and medium wash.' +
    'They have rips on the front and back side stopping just underneath the butt.' +
    'Denim is of a thick material but has a slight stretch.' +
    'These pants come mid to high waist depending on torso length.' +
    'Model is 5’6 wearing Small',
    productPrice: '29.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['j34yd.jpg', 'gt7j0.jpg']
})

const item5 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1005,
    productName: 'Essential Racer Back Dress',
    description: 'This is your everyday go to dress. ' +
    'Has a very stretchy material to fit all body types.' +
    'Model is 5’6 wearing a S/M',
    productPrice: '49.99',
    size: ['SMALL'],
    stock: ['INSTOCK'],
    imagePath:['r44yd.jpg', 'm00ghy.jpg']
})

const item6 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1006,
    productName: 'Jazzmine Denim Jacket',
    description: 'Light Wash' +
    'Fits oversized. ' +
    'Fringed at the bottom.' +
    'Has Faux pockets' +
    'Model is 5’6 wearing a Small',
    productPrice: '39.99',
    size: ['SMALL'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item7 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1007,
    productName: 'Colorful Bandeau Bodysuit',
    description: 'Is your summertime go to!' +
    'Comprised of multiple colors including yellow, blue, orange, black, and green.' +
    'Bow can be tied to the front or back. ' +
    'Has an amazing stretch.' +
    'This bodysuit can double as a bathing suit. ' +
    'Model is 5’6 wearing a Small',
    productPrice: '39.99',
    size: ['MEDIUM'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item8 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1008,
    productName: 'Silky Pink Dress',
    description: 'This dress can be worn on any occasion. ' +
    'Has a slouch neck with adjustable spaghetti straps.' +
    'Models is 5’6 wearing a small.',
    productPrice: '49.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['r44yd.jpg', 'm00ghy.jpg']
})

const item9 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1009,
    productName: 'Diamond Diva Skirt',
    description: 'This Skirt will have you turning heads!' +
    'Can be worn as a bathing suit cover up… or NOT!' +
    'Skirt has an elastic band and has rhinestones throughout. ' +
    'Skirt is heavy weight.' +
    'Has a slit that can be worn on your desired side.' +
    'Model is 5’7 wearing a size Medium.',
    productPrice: '29.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item10 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1010,
    productName: 'Tealy Bluewash Set',
    description: 'Perfect Beach Vacation Outfit' +
    'Has a long-sleeved bandeau top that can be tied at the middle. ' +
    'Sleeves are oversized for a loose fit.' +
    'Sides are cut out.' +
    'Skirt is floor length and has amazing stretch to fit your curves. ' +
    'Model is 5’7 wearing a size Medium.',
    productPrice: '39.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item11 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1011,
    productName: 'The Shi Set',
    description: 'It doesn’t matter where you’re going. You can go in this!!!' +
    'ONE SIZE FITS ALL' +
    'This two-piece is made of a very lightweight cotton material. ' +
    'Pants are made to fit oversized, has pockets on both legs. ' +
    'These pants are ankle length on women 5’7-5”9. ' +
    'Model is 5’7',
    productPrice: '45.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item12 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1012,
    productName: 'The Nyah Dress',
    description: 'This dress is perfect for when you want to be simple, yet classy, yet SEXY!' +
    'Dress stretches to fit your body.  ' +
    'Has scrunched sides.' +
    'Model is 5’4 wearing a size Medium.',
    productPrice: '29.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item13 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1013,
    productName: 'Earth Bound Bodysuit',
    description: 'Made of a slightly thick cotton material. ' +
    'Has padded bra. ' +
    'This item runs small. I suggest you go up a size' +
    'Model in brown is 5’4 wearing a Small. ' +
    'Model is green is 5’0 wearing a Small. ',
    productPrice: '15.99',
    size: ['LARGE'],
    color:[{name:'green'},{name:'brown'}],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item14 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1014,
    productName: 'Alex Denim Shorts',
    description: 'Shorts are mid waist and have a slight stretch.' +
    'Model is 5’5 wearing a Large. ',
    productPrice: '25.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item15 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1015,
    productName: 'Dria Shirt',
    description: 'Shirt has wide sleeves with a rope belt at the bottom.' +
    'Model is 5’5 wearing a Medium.  ' ,
    productPrice: '19.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item16 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1016,
    productName: 'Bleu Belted Dress',
    description: 'Light Denim Wash' +
    'Slightly oversized with detachable belt. ' +
    'Has scrunched sides.' +
    'Model is 5’5 wearing a size Medium.',
    productPrice: '49.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item17 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1017,
    productName: 'Olive Denim Jacket',
    description: 'This is an oversized crop jacket.' +
    'Get your normal size for the oversized look.   ' +
    'Details on this jacket are silver. ' +
    'Model is 5’5 wearing a Small.',
    productPrice: '20.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item18 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1018,
    productName: 'Shaniya Crop Jacket',
    description: 'This is an oversized denim crop jacket. ' +
    'Get your normal size for the oversized look.   ' +
    'Model is 5’2 wearing a Medium.',
    productPrice: '35.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item19 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1019,
    productName: 'Clutch Denim Shorts',
    description: 'These shorts are slightly longer in the back than the front. ' +
    'They have a scrunch waist and have great stretch. ' +
    'They come mid-waist. ' +
    'Model is 5’2 wearing a Large.',
    productPrice: '22.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item20 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1020,
    productName: 'Liyah OverSized Tunic',
    description: 'This dress fits oversized.' +
    'Has a draw string bottom so you can tighten it to your liking. ' +
    'This dress has pockets on both sides. ',
    productPrice: '22.95',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})

const item21 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1021,
    productName: 'Essential Bodysuit',
    description: 'Has thick straps. ' +
    'Amazing stretch.' +
    'True To Size. ' +
    'Model is 5’4 wearing a Small.',
    productPrice: '39.99',
    size: ['LARGE'],
    stock: ['INSTOCK'],
    imagePath:['4hyd.jpg', 'gte290.jpg']
})


//categories
const category1 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'New Arrivals',
    items: []
})

const category2 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Bottoms',
    items: [item19, item14, item11, item10, item9, item4, item2, item1]
})

const category3 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Dresses',
    items: [item16, item12, item8, item5],
    imagePath: '.\itemPics\Model 1\ff-06.jpg'
})

const category4 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Tops',
    items: [item21, item20, item15, item13, item7]
})

const category5 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Outer Wear',
    items: [item18, item17, item6, item3]
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
    await item6.save();  
    await item7.save();
    await item8.save();  
    await item9.save();
    await item10.save();
    await item11.save();  
    await item12.save();
    await item13.save();  
    await item14.save();
    await item15.save();
    await item16.save();  
    await item17.save();
    await item18.save();  
    await item19.save();
    await item20.save();
    await item21.save();
    await category1.save();
    await category2.save();
    await category3.save();
    await category4.save();
    await category5.save();
    //await discount1.save();

    await mongoose.disconnect();
  }
  
  run();