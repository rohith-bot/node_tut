const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req,res)=>{
   res.writeHead(200)
   
   fs.writeFile("request.json",json,()=>{console.log("writting to file")})
   res.end("writting")
})

server.listen(5000,()=>{
    console.log("Server running on port 5000")
})