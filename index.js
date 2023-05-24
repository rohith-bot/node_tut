const fs = require("node:fs");


process.env.THREADPOOL_SIZE = 1;

const calls = 10;
const start = Date.now()
for(let i = 0; i<calls; i++){
    fs.readFile("file.txt","utf-8",(err,data)=>{
        console.log("read")
    });
    console.log(Date.now() - start)
}






