const fs = require("node:fs")
const zlib = require("node:zlib")

const gzip = zlib.createGzip()

const readStream = fs.createReadStream("greet.txt",{
    encoding:"utf-8",
    highWaterMark:2,
})

const writeStream = fs.createWriteStream("greetAsync1.txt.gz")


readStream.pipe(gzip).pipe(writeStream); //we are chaining readstream with transform stream and then again with write steram