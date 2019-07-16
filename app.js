var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var nodeMailer = require('nodemailer');
const creds = require('./config/config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });
  mailOpts = {
    from: req.body.name,
    to: 'khelil.k@gmail.com',
    subject: 'Site - Nouveau message de '+ req.body.name,
    text: `Nom: ${req.body.name}\nMail: ${req.body.email}\nTel: ${req.body.tel} \n \n${req.body.message}`
  };

  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      console.log('fail');
    }
    else {
      console.log('success');
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in developments
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
