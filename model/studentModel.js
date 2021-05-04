var mongoose = require('mongoose');
//schema
var StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export Student Model
var Student = module.exports = mongoose.model('Student', StudentSchema);
module.exports.get = function (callback, limit) {
   Student.find(callback).limit(limit); 
}