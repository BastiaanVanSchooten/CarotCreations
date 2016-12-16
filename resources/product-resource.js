/**
 * Created by Bastiaan on 16-12-2016.
 */
var express = require('express');
var router = express.Router();
var Product = require('../model/product.js');

router.get('/', function(req, res){

    Product.find({}, function(err, products){

        if(err){
            res.status(500).json({error: 'Error connecting to database'});
        }

        if(!products.length){
            res.status(404).json({error: 'No prducts found in the database'});
        }

        res.status(200).json({products: products});

    });

});

router.post('/', function(req, res){

    var newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    });

    newProduct.save(function(err, product){
        if(err){
            res.status(400).json({error: 'Error saving new product to the database'});
        }
        res.status(201).json({created: product});
    });

});

module.exports = router;