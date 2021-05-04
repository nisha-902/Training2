let router=require("express").Router();
var bioController= require('./Controller/bioController');
var studentController = require('./controller/studentController')
router.get("/", (req,res)=>{
    res.json({
        status:true,
        msg:"welcome to our first Rest API"
    });
});

router.post('/addBio2', bioController.addBio2);
/**
 * student routes
 */
router.post('/addStudent',studentController.addStudent);
router.post('/addStudentmethod2',studentController.addStudentmethod2);
module.exports=router;