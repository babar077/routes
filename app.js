var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var status=require('./routes/status');
var number=require('./routes/number');
var product=require('./routes/product');
var info=require('./routes/showInfo');
var login=require('./routes/showLogin');
var multiplication=require('./routes/multiplication');

var app = express();

// view engine setup
cons = require('consolidate'),

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// status routes
app.get('/',status.addStatus);
// number
app.get('/random',number.addNumber);
// multiply
app.get('/multiply/:a/:b',product.addProduct);

// login
app.get('/login',login.viewLogin);
app.post('/login',login.getLogin);
// info
app.get('/records',info.viewInfo);
app.post('/record',info.addInfo);
// Authenticator
// app.post('/login', auth.login);
// app.get('/signin/:username/:password', auth.login);




/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
app.listen(4000, function() {
    console.log('message:"Server is live and Ready" ')
});
