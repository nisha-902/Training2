let router=require("express").Router();
router.get("/", (req,res)=>{
    res.json({
        status:true,
        msg:"welcome to our first Rest API"
    });
});
module.exports=router;