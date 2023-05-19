const PizzaShop = require("./pizza-shop.js")
const DrinkMachine = require("./drinkMachine.js")

const dominos = new PizzaShop()
const drinks = new DrinkMachine()

dominos.on("pizza-order",(size,toppings)=>{
    console.log(`${size} Pizza is baking with ${toppings}`)
    drinks.serveDrink(size)
})
dominos.order("large", "olives");
dominos.displayOrderno();




// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza",(size,drinks)=>{
//     console.log(`Order recieved! baking ${size} size pizza with ${drinks}`)
// })

// emitter.on("order-pizza", (size)=>{
//     if(size === 'large'){
//         console.log(`you are a member now`)
//     }
// })

// emitter.emit("order-pizza", "regular", "coke")