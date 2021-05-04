const express=require('express');
const app= express();
const port=3000
app.post("/", (req,res)=>{
    //  res.end("msg")
    // HTML FORMAT
    // res.status('200').send("hello routning works properly");
    // JSON FORMAT
    res.status('200').json({msg:"hello routning works properly"})
})
app.listen(port,()=>{
    console.log("server works at port "+port)
})