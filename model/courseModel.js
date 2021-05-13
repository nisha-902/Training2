var mongoose = require('mongoose');
//schema
var courseSchema = mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export Course Model
var Course = module.exports = mongoose.model('course',courseSchema);
module.exports.get = function (callback, limit) {
   Course.find(callback).limit(limit); 
}