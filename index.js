function greet(name){
    console.log(`hello ${name}`)
}

function greetRohith(greetfun){
    const name = "Rohith"
    greetfun(name)
}

greetRohith(greet)

