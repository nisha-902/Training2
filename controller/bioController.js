var Bio = require('../model/bioModel');

// Insert

exports.addBio = function(req,res){
    // console.log(req)
    // res.send(req.body.email);
    var bioObj  = new Bio();
    bioObj.name = req.body.name;
    bioObj.email = req.body.email;
    bioObj.phone = req.body.phone;
    bioObj.address = req.body.address;
    bioObj.save();
    res.status(200).send({success:true,message:"Addded",status:200})
}
exports.addBio2= function(req, res){
    var formdata=req.body
    Bio.findOne({email:formdata.email})
    .then(data=>{
        if (data==null){
          
var bioObj  = new Bio();
bioObj.name = formdata.name
bioObj.email = formdata.email
bioObj.phone = formdata.phone
bioObj.address = formdata.address
bioObj.save()
.then(data=>{
        res.status(200).send({success:true,
        message:"Addded",
        status:200,
        stu:data})

})
        }
        else{
            res.status(409).send({success:false,
                 message:"already exist email", 
                 status:409,
                 stu:[]})
        }
    })
}