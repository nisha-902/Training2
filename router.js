let router=require("express").Router();
var multer  = require('multer')
var path = require('path')
var bioController= require('./Controller/bioController');
var studentController = require('./controller/studentController');
var productController= require('./controller/productController');
var myProductController=require('./Controller/myProductController');
var authController=require('./controller/authController');
var notesController=require('./controller/notesController');
var courseController=require('./controller/courseController');
var subjectController=require('./controller/subjectController');
// router.get("/", (req,res)=>{
//     res.json({
//         status:true,
//         msg:"welcome to our first Rest API"
//     });
// });
var storage= multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/notes')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
var upload= multer({ storage: storage})
/**
 * notes routes
 */

 router.post('/addNotes',upload.single('document'),notesController.addnotes)
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
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout',authController.logout);
/**
 * product routes
 */
 router.post('/addProduct',productController.addProduct);
 router.post('/addProductmethod2',productController.addProductmethod2);

/**
 * myProduct routes
 */
router.post('/addmyProduct', myProductController.addmyproduct);
router.post('/addmyProduct2', myProductController.addmyproduct2);
router.get('/getmyProduct', myProductController.getmyproduct);
router.post('/getmyProductById', myProductController.getmyproductbyid);
router.post('/updatemyProduct', myProductController.updatemyproduct);
router.post('/deletemyProduct',myProductController.deletemyproduct);
/**
 * course routes
 */
router.post("/addCourse", courseController.addcourse);
/**
 * subject routes
 */
 router.post("/addSubject", subjectController.addsubject);
 router.get("/getSubject",subjectController.getsubject);
 router.get("/getSubject",subjectController.getsubject);
 router.post("/getSubjectByPost",subjectController.getsubjectbypost);
 router.get("/getSubjectByGet/:id",subjectController.getsubjectbyget);
module.exports=router;         