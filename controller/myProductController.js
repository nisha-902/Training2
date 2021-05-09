var myProduct= require('../model/myProductModel');

exports.addmyproduct= function(req,res){
    console.log(req.body)
    
            var myProductObj= new myProduct();
    myProductObj.product_name= req.body.product_name;
    myProductObj.SKU= req.body.SKU;
    myProductObj.quantity= req.body.quantity;
    myProductObj.model_number= req.body.model_number;
    myProductObj.serial_number= req.body.serial_number;
    myProductObj.gst= req.body.gst;
    myProductObj.hsn= req.body.hsn;

    myProductObj.save();
    
    res.status(200).json({
        msg:"product added successfully", 
    status:true
});


 }
exports.addmyproduct2= function(req,res){
    var formdata=req.body
    myProduct.findOne({model_number:formdata.model_number})
    myProduct.findOne({serial_number:formdata.serial_number})
    myProduct.findOne({hsn:formdata.hsn})
    
    .then(data=>{
        if (data==null){
            var myProductObj= new myProduct();
          
    myProductObj.product_name= req.body.product_name;
    myProductObj.SKU= formdata.SKU;
    myProductObj.quantity= formdata.quantity;
    myProductObj.model_number= formdata.model_number;
    myProductObj.serial_number= formdata.serial_number;
    myProductObj.gst= formdata.gst;
    myProductObj.hsn= formdata.hsn;
myProductObj.save()
.then(data=>{
        res.status(200).send({success:true,
        message:"Addded",
        status:200,
        product:data})

})
        }
        else{
            res.status(409).send({success:false,
                 message:"already exist product", 
                 status:409,
                 product:[]})
        }
    });
}

exports.getmyproduct = function(req,res){
    myProduct.find().exec()
    .then(data=>{
        res.status(200).send({success:true,message:"All Products",status:200,data:data})
    })
}



exports.getmyproductbyid=function(req, res){
    myProduct.findOne({_id:req.body._id})
    .then(data=>{
        res.status(200).send({success:true,message:"data loaded",status:200,data:data})
    })
}
exports.updatemyproduct=function(req, res){
 myProduct.findOne({_id:req.body._id})
 .then(data=>{
     if(data!=null){
        //  res.send(data)
        data.product_name= req.body.product_name;
        data.SKU=req.body.SKU;
        data.quantity=req.body.quantity;
        data.gst= req.body.gst;
    
        data.save()
        
        res.status(200).send({
            success:true,
            msg:" record updated", 
        status:200})

     }
     else{
        res.status(409).send({success:false,
            message:"no product found", 
            status:409})

     }

 })
  
}
exports.deletemyproduct = function(req,res){
    myProduct.findOne({_id:req.body._id})
    .then(data=>{
        if(data!=null){
            myProduct.deleteOne({_id:req.body._id})
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
            res.status(200).send({success:true,message:"product Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No product Found",status:404})
        }
    })
}