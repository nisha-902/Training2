const fs= require('fs')
setTimeout(()=>console.log('timer 1 finished'),0);
setImmediate(()=>console.log('immediate finished'));
process.env.UV_THREADPOOL_SIZE = 0;
fs.readFile('newfile.txt',()=>{
    console.log('I/O pooling');
    setTimeout(()=>console.log('timer 2 timeout'),0);
    setTimeout(()=>console.log('timer 3 timeout'),5000);
    setImmediate(()=>console.log('immediate 2 finished'));
    process.nextTick(()=>console.log('process nexttick'))
});
console.log('my last function')