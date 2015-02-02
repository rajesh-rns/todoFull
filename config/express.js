/**
 * Created by rajeshs on 1/28/2015.
 */
var express = require("express"),
 bodyParser = require('body-parser'),
 favicon = require('serve-favicon'),
 methodOverride = require('method-override'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser');
    path = require('path');


module.exports = function() {

    var app = express();

    app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(methodOverride('_method'));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public/')));

    return app;
};