const fs= require('fs')
setTimeout(()=>console.log('timer 1 finished'),0);
setImmediate(()=>console.log('immediate finished'));
fs.readFile('newfile.txt',()=>{
    console.log('I/O pooling');
});
console.log('my last function')