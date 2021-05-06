var Product= require('../model/productModel');

exports.addProduct= function(req,res){
    
            var productObj= new Product();
    productObj.product_name= req.body.product_name;
    productObj.category_name= req.body.category_name;
    productObj.product_price= req.body.product_price;
    productObj.description_of_the_product= req.body.description_of_the_product;
    productObj.product_status= req.body.product_status;
    productObj.color_varient_name= req.body.color_varient_name;


    productObj.save();
    
    res.status(200).json({
        msg:"product added successfully", 
    status:true
});



}
exports.addProductmethod2= function(req,res){
    var formdata=req.body
    Product.findOne({product_name:formdata.product_name})
    .then(data=>{
        if (data==null){
          
var ProductObj  = new Product();
ProductObj.product_name =formdata.product_name
ProductObj.category_name = formdata.category_name
ProductObj.product_price = formdata.product_price
ProductObj.description_of_the_product =formdata.description_of_the_product
ProductObj.product_status= formdata.product_status
ProductObj.color_varient_name = formdata.color_varient_name
ProductObj.save()
.then(data=>{
        res.status(200).send({success:true,
        message:"Addded",
        status:200,
        product:data})

})
        }
        else{
            res.status(409).send({success:false,
                 message:"already exist email", 
                 status:409,
                 product:[]})
        }
    });
}
