const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(()=>console.log('Timer 1 finished'),0);
setImmediate(()=>console.log('Immdiate 1 Finished'));

process.env.UV_THREADPOOL_SIZE = 4;

fs.readFile('newfile.txt',()=>{
    console.log('I/O pooling ');

    setTimeout(()=>console.log('Timer 2 Timeout'),0);
    setTimeout(()=>console.log('Timer 3 Timeout'),5000);

    setImmediate(()=>console.log('Immediate 2 finished'));

    process.nextTick(()=>console.log('Process NextTick'));

    crypto.pbkdf2("password","salt",10000,1024,"sha512",()=>{
        console.log(Date.now() - start,'Password Encrypt 1');
    });


    crypto.pbkdf2("password","salt",10000,1024,"sha512",()=>{
        console.log(Date.now() - start,'Password Encrypt 2');
    });


    crypto.pbkdf2("password","salt",10000,1024,"sha512",()=>{
        console.log(Date.now() - start,'Password Encrypt 3');
    });

    
    crypto.pbkdf2("password","salt",10000,1024,"sha512",()=>{
        console.log(Date.now() - start,'Password Encrypt 4');
    });

});

console.log("My last function");