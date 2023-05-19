const fs = require("node:fs/promises")

async function read(){
    const data = await fs.readFile("greet.txt")
    console.log(data)
}


read()


// fs.readFile("greet.txt","utf-8")
// .then(data =>{
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })










// // // const data = fs.readFileSync("./textFiletxt")//this is synchronous

// // // console.log(data.toString())

// // fs.readFile("./textFiletxt",(err,data1) =>{
// //     console.log(data1)
// // })

// fs.writeFileSync("./greet.txt","hello\nhi");

// fs.writeFile("./greet.txt","Heloo I am Async",{flag:"a"} ,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("data written")
//     }
// })
