let router=require("express").Router();
var bioController= require('./Controller/bioController');
var studentController = require('./controller/studentController');
var productController= require('./controller/productController');
router.get("/", (req,res)=>{
    res.json({
        status:true,
        msg:"welcome to our first Rest API"
    });
});
/**
 * bio routes
 */
router.post('/addBio',bioController.addBio);
router.post('/addBio2', bioController.addBio2);
/**
 * student routes
 */
router.post('/addStudent',studentController.addStudent);
router.post('/addStudentmethod2',studentController.addStudentmethod2);

router.get('/getStudent', studentController.getstudent);
router.post('/getStudentById', studentController.getstudentbyid);
router.post('/updateStudent', studentController.updatestudent);
router.post('/deleteStudent',studentController.deletestudent);
/**
 * product routes
 */
 router.post('/addProduct',productController.addProduct);
 router.post('/addProductmethod2',productController.addProductmethod2);
module.exports=router;