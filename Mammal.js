import Animal from "./Animal.js";

class Mammal extends Animal {
    constructor(name, food, energy, canReproduce) {
        super(name, food, energy, canReproduce);
    }
}

export default Mammal;