const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter{
    constructor(){
        super()
        this.orderno = 0;
    }

    order(size,toppings){
        this.orderno++
        this.emit("pizza-order", size , toppings)
    }

    displayOrderno(){
        console.log(`the order is ${this.orderno}`)
    }
}

module.exports = PizzaShop