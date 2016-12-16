/**
 * Created by Bastiaan on 15-12-2016.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config.js');

var Product = require('./model/product.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.databaseURL, function(err){
   if(err){
       console.log("Error connecting to Mongo database!");
   }
   console.log("Connected to Mongo Database!")
});

//-------------------------
// generateDummyProducts();
//-------------------------

var productResource = require('./resources/product-resource.js');
app.use('/api/products', productResource);


app.listen(3000, function(){
   console.log("CarotCreations API listening on port 3000!");
});

function generateDummyProducts(){

    var dummy = new Product({
        name: "Lalilala poppetje",
        description: "Leuk, toch?",
        price: 10.50,
        category: "Poppen"
    });
    dummy.save();

    dummy = new Product({
        name: "Zebra Zoë",
        description: "Zebra knuffel",
        price: 80,
        category: "Poppen"
    });
    dummy.save();

    dummy = new Product({
        name: "Armwarmers",
        description: "Lekker warm, om je arm!",
        price: 15.95,
        category: "Kleding"
    });
    dummy.save();
}