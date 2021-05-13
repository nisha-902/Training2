var mongoose = require('mongoose');
var Schema=mongoose.Schema
//schema
var subjectSchema = mongoose.Schema({
    course_id:{
        type:Schema.Types.ObjectId,
        ref:'course'

    },
    subject_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export Subject Model
var Subject = module.exports = mongoose.model('subject',subjectSchema);
module.exports.get = function (callback, limit) {
   Subject.find(callback).limit(limit); 
}