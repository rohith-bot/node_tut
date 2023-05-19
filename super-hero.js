class SuperHero{
    constructor(name){
        this.name = name;
    }

    getname(){
        console.log(this.name)
    }

    setname(value){
        this.name = value;
    }
}

export default SuperHero

export const hero = new SuperHero("batman")