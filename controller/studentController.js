var Student= require('../model/studentModel');

exports.addStudent= function(req,res){
    
            var studentObj= new Student();
    studentObj.name= req.body.name;
    studentObj.email= req.body.email;
    studentObj.phone= req.body.phone;
    studentObj.address= req.body.address;

    studentObj.save();
    
    res.status(200).json({
        msg:"student added successfully", 
    status:true
});

        
    
          
    // console.log("hello")
    // res.send("working in postman")
    // console.log(req.body)



}
exports.addStudentmethod2= function(req,res){
    var formdata=req.body
    Student.findOne({email:formdata.email})
    .then(data=>{
        if (data==null){
          
var StudentObj  = new Student();
StudentObj.name =formdata.name
StudentObj.email = formdata.email
StudentObj.phone = formdata.phone
StudentObj.address =formdata.address
StudentObj.save()
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
    });//done 
}
exports.getstudent = function(req,res){
    Student.find().exec()
    .then(data=>{
        res.status(200).send({success:true,message:"All Students",status:200,data:data})
    })
}



exports.getstudentbyid=function(req, res){
    Student.findOne({_id:req.body.id})
    .then(data=>{
        res.status(200).send({success:true,message:"data loaded",status:200,data:data})
    })
}