const http = require("node:http")

const server = http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("<h1>Hello World</h1>");
})

server.listen(5000,()=>{
    console.log("Server running on port 5000")
})