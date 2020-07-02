//inserts

'use strict';
const mongoose = require('mongoose');
const Item = require('./models/item');
const Category = require('./models/category');
const Order = require('./models/order');

//node blackhouse-inserts.js

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
    'Model is 5’0 wearing a Small' +
    'Comes in color Multi',
    productPrice: 45.00,
    variation: [{
        size: 'small',
        color: 'multi',
        quantity:1
        },
        {
        size: 'medium',
        color: 'multi',
        quantiy: 2
        },
        {
        size:'large',
        color: 'multi',
        quantity: 0
        },
        ],
    imagePath:['/assets/images/img/Model1/ff-01.jpg', '/assets/images/img/Model1/ff-02.jpg', '/assets/images/img/Model1/ff-06.jpg']
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
    'Model is 5’0 wearing a Small' +
    'Comes in color Sage',
    productPrice: 50.00,
    variation: [{
        size: 'small',
        color: 'sage',
        quantity:1
        },
        {
        size: 'medium',
        color: 'sage',
        quantiy: 0
        },
        {
        size:'large',
        color: 'sage',
        quantity: 2
        },
        {
        size: 'xlarge',
        color: 'sage',
        quantity: 2
        }],
    imagePath: ['/assets/images/img/Model1/ff-05.jpg']
})

const item3 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1003,
    productName: 'Off The Chains Blazer',
    description: 'a statement piece that every woman needs.' +
    'Blazer comes down at a V angle in the front. ' +
    'Chains hanging are gold and can easily hang below ' +
    'Model is 5’0 wearing a Small' +
    'Comes in color Black',
    productPrice: 85.00,
    variation: [{
        size: 'small',
        color: 'black',
        quantity:1
        },
        {
        size: 'medium',
        color: 'black',
        quantiy: 3
        },
        {
        size:'large',
        color: 'black',
        quantity: 1
        },
        {
        size: 'xlarge',
        color: 'black',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model1/ff-09.jpg']
})

const item4 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1004,
    productName: 'Destroyed Denim Jeans',
    description: 'These Jeans come in a light and medium wash.' +
    'They have rips on the front and back side stopping just underneath the butt.' +
    'Denim is of a thick material but has a slight stretch.' +
    'These pants come mid to high waist depending on torso length.' +
    'Model is 5’6 wearing Small'+
    'Comes is Medium and Light',
    productPrice: 55.00,
    variation: [{
        size: 'small',
        color: 'medium',
        quantity:5
        },
        {
        size: 'medium',
        color: 'medium',
        quantiy: 6
        },
        {
        size:'large',
        color: 'medium',
        quantity: 5
        },
        {
        size: 'xlarge',
        quantity: 0
        },
        {
            size: 'small',
            color: 'light',
            quantity:5
            },
            {
            size: 'medium',
            color: 'light',
            quantiy: 6
            },
            {
            size:'large',
            color: 'light',
            quantity: 5
            },
            {
            size: 'xlarge',
            quantity: 0
            }],
    imagePath:['/assets/images/img/Model2/ff-2.jpg', '/assets/images/img/Model2/ff-1.jpg']
})

const item5 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1005,
    productName: 'Essential Racer Back Dress',
    description: 'This is your everyday go to dress. ' +
    'Has a very stretchy material to fit all body types.' +
    'Model is 5’6 wearing a S/M' +
    'Comes in color White' +
    'Please choose small for SM, and large for ML sizes',
    productPrice: 25.00,
    variation: [{
        size: 'sm',
        color:'white',
        quantity:2
        },
        {
        size: 'ml',
        color:'white',
        quantiy: 5
        }],
    imagePath:['/assets/images/img/Model2/ff-4.jpg']
})

const item6 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1006,
    productName: 'Jazzmine Denim Jacket',
    description: 'Light Wash' +
    'Fits oversized. ' +
    'Fringed at the bottom.' +
    'Has Faux pockets' +
    'Model is 5’6 wearing a Small' +
    'Comes in color Denim',
    productPrice: 45.00,
    variation: [{
        size: 'small',
        color:'denim',
        quantity:6
        },
        {
        size: 'medium',
        color:'denim',
        quantiy: 2
        },
        {
        size:'large',
        color:'denim',
        quantity: 2
        },
        {
        size: 'xlarge',
        color:'denim',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model2/ff-3.jpg']
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
    'Model is 5’6 wearing a Small' +
    'Comes in color Multi',
    productPrice: 35.00,
    variation: [{
        size: 'small',
        color:'multi',
        quantity:1
        },
        {
        size: 'medium',
        color:'multi',
        quantity: 0
        },
        {
        size:'large',
        color:'multi',
        quantity: 2
        },
        {
        size: 'xlarge',
        color:'multi',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model2/ff-5.jpg']
})

const item8 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1008,
    productName: 'Silky Pink Dress',
    description: 'This dress can be worn on any occasion. ' +
    'Has a slouch neck with adjustable spaghetti straps.' +
    'Models is 5’6 wearing a small.'+
    'Comes in color Pink',
    productPrice: 40.00,
    variation: [{
        size: 'small',
        color:'pink',
        quantity:2
        },
        {
        size: 'medium',
        color:'pink',
        quantiy: 2
        },
        {
        size:'large',
        color:'pink',
        quantity: 1
        },
        {
        size: 'xlarge',
        color:'pink',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model2/ff-6.jpg']
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
    'Model is 5’7 wearing a size Medium.' +
    'Comes in color Black',
    productPrice: 85.00,
    variation: [{
        size: 'small',
        color:'black',
        quantity:2
        },
        {
        size: 'medium',
        color:'black',
        quantiy: 3
        },
        {
        size:'large',
        color:'black',
        quantity: 2
        },
        {
        size: 'xlarge',
        color:'black',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model3/ff-07.jpg']
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
    'Model is 5’7 wearing a size Medium.' +
    'Comes in color Blue' +
    'Please choose small for SM, and Large for ML',
    productPrice: 60.00,
    variation: [{
        size: 'small',
        color:'blue',
        quantity:3
        },
        {
        size: 'large',
        color:'blue',
        quantiy: 4
        }],
    imagePath:['/assets/images/img/Model3/ff-06.jpg']
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
    'Model is 5’7' +
    'Comes in Blue, White, Taupe, or Olive' + 
    'Please choose OS',
    productPrice: 100.00,
    variation: [{
        size: 'os',
        color:'blue',
        quantity:2
        },
        {
        size: 'os',
        color:'white',
        quantiy: 2
        },
        {
        size:'os',
        color:'taupe',
        quantity: 3
        },
        {
        size: 'os',
        color:'olive',
        quantity: 3
        }],
    imagePath:['/assets/images/img/Model3/ff-05.jpg']
})

const item12 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1012,
    productName: 'The Nyah Dress',
    description: 'This dress is perfect for when you want to be simple, yet classy, yet SEXY!' +
    'Dress stretches to fit your body.  ' +
    'Has scrunched sides.' +
    'Model is 5’4 wearing a size Medium.' +
    'Comes in color White' +
    'Please choose small for SM, and Large for ML',
    productPrice: 60.00,
    variation: [{
        size: 'sm',
        color: 'white',
        quantity:1
        },
        {
        size: 'ml',
        color: 'white',
        quantiy: 0
        }],
    imagePath:['/assets/images/img/Model4/ff-03.jpg', '/assets/images/img/Model4/ff-11.jpg','/assets/images/img/Model4/ff-02.jpg']
})

const item13 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1013,
    productName: 'Earth Bound Bodysuit',
    description: 'Made of a slightly thick cotton material. ' +
    'Has padded bra. ' +
    'This item runs small. I suggest you go up a size' +
    'Model in brown is 5’4 wearing a Small. ' +
    'Model is green is 5’0 wearing a Small. ' +
    'Comes in color Green or Brown',
    productPrice: 40.00,
    variation: [{
        size: 'small',
        color: 'green',
        quantity:8
        },
        {
        size: 'medium',
        color: 'green',
        quantiy: 9
        },
        {
        size:'large',
        color: 'green',
        quantity: 9
        },
        {
        size: 'xlarge',
        color: 'green',
        quantity: 0
        },
        {
        size: 'small',
        color: 'brown',
        quantity:9
        },
        {
        size: 'medium',
        color: 'brown',
        quantiy: 9
        },
        {
        size:'large',
        color: 'brown',
        quantity: 8
        },
        {
        size: 'xlarge',
        color:'brown',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model1_4/ff-2.jpg']
})

const item14 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1014,
    productName: 'Alex Denim Shorts',
    description: 'Shorts are mid waist and have a slight stretch.' +
    'Model is 5’5 wearing a Large. ' +
    ' Comes in color Denim',
    productPrice: 35.00,
    variation: [{
        size: 'small',
        color:'denim',
        quantity:6
        },
        {
        size: 'medium',
        color:'denim',
        quantiy: 5
        },
        {
        size:'large',
        color:'denim',
        quantity: 4
        },
        {
        size: 'xlarge',
        color:'denim',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model5/ff-04.jpg']
})

const item15 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1015,
    productName: 'Dria Shirt',
    description: 'Shirt has wide sleeves with a rope belt at the bottom.' +
    'Model is 5’5 wearing a Medium.  ' + 
    'Comes in colors White or Taupe',
    productPrice: 30.00,
    variation: [{
        size: 'small',
        color:'white',
        quantity:6
        },
        {
        size: 'medium',
        color:'white',
        quantiy: 4
        },
        {
        size:'large',
        color:'white',
        quantity: 5
        },
        {
        size: 'xlarge',
        color:'white',
        quantity: 0
        },
     {
            size: 'small',
            color:'taupe',
            quantity:6
            },
            {
            size: 'medium',
            color:'taupe',
            quantiy: 5
            },
            {
            size:'large',
            color:'taupe',
            quantity: 5
            },
            {
            size: 'xlarge',
            color:'taupe',
            quantity: 0

    }],
    imagePath:['/assets/images/img/Model5/ff-03.jpg']
})

const item16 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1016,
    productName: 'Bleu Belted Dress',
    description: 'Light Denim Wash' +
    'Slightly oversized with detachable belt. ' +
    'Has scrunched sides.' +
    'Model is 5’5 wearing a size Medium.' +
    'Comes in color Blue',
    productPrice: 55.00,
    variation: [{
        size: 'small',
        color: 'blue',
        quantity:1
        },
        {
        size: 'medium',
        color: 'blue',
        quantiy: 1
        },
        {
        size:'large',
        color: 'blue',
        quantity: 0
        },
        {
        size: 'xlarge',
        color: 'blue',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model5/ff-09.jpg']
})

const item17 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1017,
    productName: 'Olive Denim Jacket',
    description: 'This is an oversized crop jacket.' +
    'Get your normal size for the oversized look.   ' +
    'Details on this jacket are silver. ' +
    'Model is 5’5 wearing a Small.' +
    'Comes in color Olive',
    productPrice: 45.00,
    variation: [{
        size: 'small',
        color: 'olive',
        quantity:2
        },
        {
        size: 'medium',
        color: 'olive',
        quantiy: 1
        },
        {
        size:'large',
        color: 'olive',
        quantity: 1
        },
        {
        size: 'xlarge',
        color: 'olive',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model5/ff-07.jpg']
})

const item18 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1018,
    productName: 'Shaniya Crop Jacket',
    description: 'This is an oversized denim crop jacket. ' +
    'Get your normal size for the oversized look.   ' +
    'Model is 5’2 wearing a Medium.' +
    'Comes in color Denim',
    productPrice: 45.00,
    variation: [{
        size: 'small',
        color: 'denim',
        quantity:2
        },
        {
        size: 'medium',
        color: 'denim',
        quantiy: 1
        },
        {
        size:'large',
        color: 'denim',
        quantity: 2
        },
        {
        size: 'xlarge',
        color: 'denim',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model6/ff-3.jpg']
})

const item19 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1019,
    productName: 'Clutch Denim Shorts',
    description: 'These shorts are slightly longer in the back than the front. ' +
    'They have a scrunch waist and have great stretch. ' +
    'They come mid-waist. ' +
    'Model is 5’2 wearing a Large.' +
    'Comes in color Denim',
    productPrice: 35.00,
    variation: [{
        size: 'small',
        color: 'denim',
        quantity:6
        },
        {
        size: 'medium',
        color: 'denim',
        quantiy: 2
        },
        {
        size:'large',
        color: 'denim',
        quantity: 2
        },
        {
        size: 'xlarge',
        color: 'denim',
        quantity: 0
        }],
    imagePath:['/assets/images/img/Model6/ff-5.jpg']
})

const item20 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1020,
    productName: 'Liyah OverSized Tunic',
    description: 'This dress fits oversized.' +
    'Has a draw string bottom so you can tighten it to your liking. ' +
    'This dress has pockets on both sides. ' +
    'Comes in color Lavender' +
    'Please choose small for SM, and large for ML sizes.',
    productPrice: 45.00,
    variation: [{
        size: 'small',
        color: 'lavender',
        quantity:2
        },
        {
        size: 'large',
        color: 'lavender',
        quantiy: 2
        }],
    imagePath:['/assets/images/img/Model6/ff-4.jpg']
})

const item21 = new Item({
    _id: new mongoose.Types.ObjectId(),
    productSKU: 1021,
    productName: 'Essential Bodysuit',
    description: 'Has thick straps. ' +
    'Amazing stretch.' +
    'True To Size. ' +
    'Model is 5’4 wearing a Small.' +
    'Comes in colors White, Black, Heather, Sage, Light Mocha and Ash Blue',
    productPrice: 25.00,
    variation: [{
        size: 'small',
        color: 'white',
        quantity:9
        },
        {
        size: 'medium',
        color: 'white',
        quantiy: 8
        },
        {
        size:'large',
        color: 'white',
        quantity: 4
        },
        {
        size: 'xlarge',
        color: 'white',
        quantity: 5
        },
        {
            size: 'small',
            color: 'black',
            quantity:7
            },
            {
            size: 'medium',
            color: 'black',
            quantiy: 8
            },
            {
            size:'large',
            color: 'black',
            quantity: 4
            },
            {
            size: 'xlarge',
            color: 'black',
            quantity: 5
            },
            {
                size: 'small',
                color: 'heather',
                quantity:9
                },
                {
                size: 'medium',
                color: 'heather',
                quantiy: 9
                },
                {
                size:'large',
                color: 'heather',
                quantity: 6
                },
                {
                size: 'xlarge',
                color: 'heather',
                quantity: 6
                },
            {
        size: 'small',
        color: 'sage',
        quantity:7
        },
        {
        size: 'medium',
        color: 'sage',
        quantiy: 7
        },
        {
        size:'large',
        color: 'sage',
        quantity: 2
        },
        {
        size: 'xlarge',
        color: 'sage',
        quantity: 4
        },
    {
        size: 'small',
        color: 'light mocha',
        quantity: 7
        },
        {
        size: 'medium',
        color: 'light mocha',
        quantiy: 6
        },
        {
        size:'large',
        color: 'light mocha',
        quantity: 4
        },
        {
        size: 'xlarge',
        color: 'light mocha',
        quantity: 4
        },
        {
            size: 'small',
        color: 'ash blue',
        quantity: 7
        },
        {
        size: 'medium',
        color: 'ash blue',
        quantiy: 7
        },
        {
        size:'large',
        color: 'ash blue',
        quantity: 4
        },
        {
        size: 'xlarge',
        color: 'ash blue',
        quantity: 4
        }],     
    imagePath:['/assets/images/img/Model4/ff-05.jpg']
})


//categories
const category7 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Active',
    items: [ item2, item1],
    imagePath: '/assets/images/bottoms.PNG'
})

const category1 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Bottoms',
    items: [item19, item14, item11, item10, item9, item4, item2, item1],
    imagePath: '/assets/images/bottoms.PNG'
})

const category2 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Dresses',
    items: [item16, item12, item8, item5],
    imagePath: '/assets/images/dresses.PNG'
})

const category3 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Tops',
    items: [item21, item20, item15, item13, item7],
    imagePath: '/assets/images/tops.PNG'
})

const category4 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Outer Wear',
    items: [item18, item17, item6, item3],
    imagePath : '/assets/images/outerwear.PNG'
})

const category5 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'Two Piece Sets',
    items: [item1, item2, item10, item11],
    imagePath : '/assets/images/twopiece.PNG'
})

const category6 = new Category({
    _id: new mongoose.Types.ObjectId(),
    categoryName: 'New Arrivals',
    items: [item19, item18, item17, item16, item15, item14, item13,
        item12, item11, item10, item9, item8, item7, item6, item5, 
        item4, item3, item2, item1],
    imagePath: '/assets/images/newarrivals.PNG'
})


async function run() {
    await mongoose.connect('mongodb://localhost/blackhouse');
    // clearing our collections
    await Category.remove();
    await Item.remove();
    await Order.remove();
    // adding data
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
    await category6.save();
    await category7.save();
    //await discount1.save();

    await mongoose.disconnect();
  }
  
  run();