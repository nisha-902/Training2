Subject=require("../model/subjectModel")

exports.addsubject = function (req, res) {
    var formdata = req.body
    var subjectobj = new Subject();
    subjectobj.course_id= formdata.course_id
    subjectobj.subject_name = formdata.subject_name
    subjectobj.save()
    .then(data => {
        res.status(200).send({ success: true, message: "Subject added successfully", status: 200, data: data })
    })
}
exports.getsubject = function(req,res){
    Subject.find().
    populate('course_id')
    .then(data=>{
        res.status(200).send({success:true,message:"subject loaded",status:200,data:data})
    })
}
exports.getsubjectbypost = function(req,res){
    Subject.find({course_id:req.body.course_id}).
    populate('course_id')
    .then(data=>{
        res.status(200).send({success:true,message:"subject loaded",status:200,data:data})
    })
}
exports.getsubjectbyget = function(req,res){
    // console.log(req.params)
    Subject.find({course_id:req.params.id}).
    populate('course_id')
    .then(data=>{
        res.status(200).send({success:true,message:"subject loaded",status:200,data:data})
    })
}