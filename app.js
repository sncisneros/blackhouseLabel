var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');
var bodyParser = require('body-parser');
var env = require('dotenv').config();
const connectionString='mongodb+srv://ronnesha:MsBlack@blackhouse.k2l6i.mongodb.net/blackhouse?retryWrites=true&w=majority';
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var cartsRouter = require('./routes/carts');
var homeRouter = require('./routes/home');
var compression = require('compression');

var app = express();


//mongoose connection
mongoose.connection.on('connected', () => console.log('Mongoose connected.'));
mongoose.connection.on('disconnected', () => console.log("Mongoose disconnected."));
mongoose.connect(connectionString, {useNewUrlParser: true, useFindAndModify: false});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    res.status(200).json({});
  }
  next();
})


app.use(session({
  secret: 'mysecret',
  saveUninitialized: true,
  resave: true,
  cookie: { secure: false},
  store: new MongoStore({ mongooseConnection: mongoose.connection})
}));

app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
// app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use(express.static(__dirname + '/dist/blackhouse-label-client'));

app.get('*.*', express.static('dist/blackhouse-label-client'));


app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', categoryRouter);
app.use('/api', cartsRouter);
app.use('/api', homeRouter);

app.get('*', function (req, res) {
  res.status(200).sendFile(`/`, {root: 'dist/blackhouse-label-client'});
});


//to access session in all templates
app.use(function(req, res, next){
  res.locals.session = req.session;
  next();
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
dentials: true