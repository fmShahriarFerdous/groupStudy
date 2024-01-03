class Player {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails() {
        return `${this.#name} is ${this.#age} years old`;
    }
}

class Cricketer extends Player {
    #centuries

    constructor(name, age, centuries) {
        super(name);
        this.#centuries = centuries;
    }
}

const masrafee = new Cricketer('masrafee', 40, 10);

console.log(masrafee.getPlayerDetails());
