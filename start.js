const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const app = express();
const mysql = require('mysql');
const keys = require("./keys");

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });
app.get("/users",(req,res) => {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});
app.get("/users/isloggedin",(req,res) => {
  res.json(
    {
      response: "true"
    }
  );
});
app.get('*', function (request, response){  
  response.sendFile(path.resolve(__dirname, 'build', 'index.html')) })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});
// var connection = mysql.createConnection({
//   host: keys.RDS.host,
//   user: keys.RDS.username,
//   password: keys.RDS.password,
//   port: keys.RDS.port 
// });

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
module.exports = app;
