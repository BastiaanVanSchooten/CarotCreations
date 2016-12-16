/**
 * Created by Bastiaan on 16-12-2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);