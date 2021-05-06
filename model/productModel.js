var mongoose = require('mongoose');
//schema
var productSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    description_of_the_product: {
        type: String,
        required: true
    },
    product_status:{
        type:String,
        required:true
    },
    color_varient_name:{
        type:String,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
    
});
// Export product Model
var Product = module.exports = mongoose.model('product', productSchema);
module.exports.get= function (callback, limit) {
   Product.find(callback).limit(limit); 
}