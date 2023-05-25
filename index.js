Promise.resolve().then(()=>{
    console.log("from promise")
})
process.nextTick(()=>{
    console.log("From next tick")
})



