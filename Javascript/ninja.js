class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        return `${this.name} 's strengh is ${this.strength} with speed of ${this.speed} and has ${this.health} health`;
    }

    drinkSake(){
        this.health += 10;
    }
        
}