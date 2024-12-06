import Animal from "./Animal.js";
import Mammal from "./Mammal.js";

const elephant = new Animal("Gajah", "Herbivore", 100, true);
const tiger = new Animal("Macan", "Carnivore", 50, true);
const orangutan = new Mammal("Orangutan", "Omnivore", 200, false);

console.log(orangutan);