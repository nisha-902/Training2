Course=require("../model/courseModel")
exports.addcourse = function (req, res) {
    var formdata = req.body
    var courseobj = new Course();
    courseobj.course_name = formdata.course_name
    courseobj.save()
    .then(data => {
        res.status(200).send({ success: true, message: "Courses added successfully", status: 200, data: data })
    })
}