var mongoose = require('mongoose');
//schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export user Model
var user = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
   user.find(callback).limit(limit); 
}