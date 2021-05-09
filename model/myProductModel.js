var mongoose = require('mongoose');
//schema
var myproductSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
   SKU: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    model_number: {
        type: String,
        required: true
    },
    serial_number:{
        type:String,
        required:true
    },
    gst:{
        type:String,
        required:true
    },
    hsn:{
        type:String,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
    
});
// Export myproduct Model
var myProduct = module.exports = mongoose.model('myproduct', myproductSchema);
module.exports.get= function (callback, limit) {
   myProduct.find(callback).limit(limit); 
}