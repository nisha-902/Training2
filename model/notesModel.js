var mongoose = require('mongoose');
//schema
var notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export notes Model
var notes = module.exports = mongoose.model('notes', notesSchema);
module.exports.get = function (callback, limit) {
   notes.find(callback).limit(limit); 
}