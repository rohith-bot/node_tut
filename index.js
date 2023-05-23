const http = require("node:http")
const fs = require("node:fs")


const server = http.createServer() 


server.listen(5000,()=>{
    console.log("Server running on port 5000")
})