var mangoose= require("mangoose");
var mybioSchema= mangoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }

    
});
// Export myBio Model
var myBio = module.exports = mongoose.model('mybio', mybioSchema);
module.exports.get = function (callback, limit) {
   myBio.find(callback).limit(limit); 
}