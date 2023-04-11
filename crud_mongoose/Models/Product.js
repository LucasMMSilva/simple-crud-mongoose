const mongoose = require('../db/conn');
const {Schema} = mongoose;
const Product = mongoose.model(
    'Product',
    new Schema({
        name:{type:String,required:true},
        price:{type:String,required:true}
    })
)
module.exports = Product;