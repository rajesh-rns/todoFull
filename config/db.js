/**
 * Created by rajeshs on 1/30/2015.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){

    var db = mongoose.connect(config.db, function(err){
       if(err){
           console.error("Could not connect to mongodb!");
           console.log(err);
       }

    });

    require('../models/todo.model.js');
    return db;

};