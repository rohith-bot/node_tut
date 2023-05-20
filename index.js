const fs = require("node:fs")

const read = fs.createReadStream("./greet.txt")

const write = fs.createWriteStream("./greetAsync.txt")

read.on("data",(chunk)=>{
    console.log(chunk)
    write.write(chunk)
})