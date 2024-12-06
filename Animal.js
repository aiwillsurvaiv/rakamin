class Animal {
    #age
    constructor(name, food, energy, canReproduce) {
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.canReproduce = canReproduce;
        this.#age = 20;
    }

    get #getAge() {
        return this.#age;
    }
    isAdult() {
        return this.#age > 18
    }
}


export default Animal;
// const elephant = new Animal("Gajah", "Herbivore", 100, true);
// const tiger = new Animal("Macan", "Carnivore", 50, true);