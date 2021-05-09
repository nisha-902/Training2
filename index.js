const express=require("express")
const app= express()
var port= process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send({msg:"first api works"})
})
app.listen(port,()=>{
    console.log(`server run at port ${port}`)
})

//import body parser
let bodyParser= require('body-parser');

//import mongoose
let mongoose= require('mongoose');

//config bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let apiRoutes = require('./router');
app.use('/api',apiRoutes);


//connect to mongoose
const dbPath = 'mongodb://localhost/firstrest';
const options = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

