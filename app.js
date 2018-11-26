// const express = require('express');
// const path = require('path');
// const logger = require('morgan');
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const cookieSession = require("cookie-session");
// const bodyParser = require('body-parser');
// const favicon = require('express-favicon');
// const app = express();
// const keys = require("./config/keys");
// const User = require("./config/user-model");

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));
// // app.use(cookieSession({
// //   maxAge:24 * 60 * 60 * 1000,
// //   keys: [keys.session.cookieKey]
// // }));
// app.use(passport.initialize());
// require("./config/passport");
// // app.use(passport.session());

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// // app.get('*', (req,res) =>{
// //     res.sendFile(path.join(__dirname+'/build/index.html'));
// // });

// const authCheck = (req,res,next) => {
//   if(req.user){
//       next();
//   } else {
//       res.redirect('/login');
//   }
// };
// app.get("/",(req,res) => {
//   res.send("fasfasf");
// });
// // app.get("/users",(req,res) => {
// //   res.json([{
// //   	id: 1,
// //   	username: "samsepi0l"
// //   }, {
// //   	id: 2,
// //   	username: "D0loresH4ze"
// //   }]);
// // });

// app.get('/app',authCheck , (req,res) => {
//   res.redirect("/app");
// });

// app.get('/loggedin',passport.authenticate("google") , (req,res) => {
//   res.redirect("/unlock");
// });

// app.get('/unlock', authCheck ,(req,res) => {
//   res.send(req.user);
// });
// app.get('/google', passport.authenticate("google", {
//   scope: ["profile"]
// }));

// passport.use(
//   new GoogleStrategy({
//       clientID: keys.google.clientID,
//       clientSecret: keys.google.clientSecret,
//       callbackURL:'/loggedin'
//   },(accessToken, refreshToken, profile, done) => {
//       // Callback function
//       console.log(profile);
//       User.findOne({googleID:profile.id}).then( (currentuser) => {
//           if(currentuser){
//               done(null, currentuser);
//           } else {
//               new User({
//                   username: profile.displayName,
//                   googleID: profile.id,
//                   imageURL: profile.photos[0].value
//               }).save().then( (newuser) => {
//                   done(null, newuser);
//               });
//           }
//       });
//   })
// )

// passport.serializeUser( (user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser( (id, done) => {
//   User.findById(id).then( (user) => {
//       done(null, user);
//   } );
// });

// // app.get('*', function (request, response){  
// //   response.sendFile(path.resolve(__dirname, 'build', 'index.html')) })
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

// mongoose.connect(keys.mongodb.dbURI, ()=>{
//   console.log("We are connected to mongo!");
// })
// app.listen(process.env.PORT || '3001')
// // module.exports = app;


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport");
var indexRouter = require('./routes/index');
var app = express();
app.use(passport.initialize());
require("./config/passport");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  // console.log(err)
});

module.exports = app;
