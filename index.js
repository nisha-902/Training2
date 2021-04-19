const fs=require("fs")
const http=require("http")
const url=require('url')
// const readfile=fs.readFileSync('meanstack.txt', 'utf-8')
// console.log(readfile)

// const newtext="hello class, this is new file and created at "+Date.now();
// fs.writeFileSync('newfile.txt',newtext)
// console.log('writing complete')
 const server= http.createServer((req, res)=>{
    console.log(req.url)
//     const query=url.parse(req.url,true)
//    console.log(query)
    
    const {query, pathname} =  url.parse(req.url,true)
     console.log(req.url) 
     const path=req.url
     if(pathname===('/'))
     {
        console.log(query)
    res.end("result available");
     }
     else if(pathname==='/addcourse'){
         res.end('add course works')
     }
     else if(pathname==='/student')
     {
         fs.readFile("./data/data.txt", "utf-8", (err, data)=>{
            //const mydata=JSON.parse(data)
             console.log("API work")
             res.writeHead(200, {'context-type':'text/javascript'})
             res.end(data)

         })
         
         fs.readFile("./data/result.json", "utf-8", (err, data)=>{
            
             console.log(data)
            // res.end("API works"))
         })


     }
     else{
         res.writeHead(404,{
             'content-type':'text/html',
             'my-own-header':'hello world'
         }) 
         res.end('404 page not found')
     }


});
server.listen(8080, '127.0.0.1',()=>{
    console.log('server run at 127.0.0.1:8080');
});