console.log("hello world")

// loop
for (let i = 0; i < 5; i++) {
    console.log(i)
    console.log("*")
}

// Nested loop
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("*")
    }
}

// Buat fungsi yang print bil ganjil dari 0 - 100
function oddNumber() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
        }
        console.log(i);
        return
    }
}

oddNumber();

// Buat fungsi kelipatan 3 = Fizz; kelipatan 5 = Buzz; kelipatan 3 dan 5 = FizzBuzz
function fizzBuzz(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20);

// Array
const DAYS = ['monday', 'tuesday', 'sunday']
const DAYSV2 = ['wednesday', 3, true]

console.log(DAYSV2[3])
console.log(DAYSV2.length)

// Tambah item di array
DAYS.push("wednesday")
console.log(DAYS)

// Narik item di array
DAYS.pop()
console.log(DAYS.includes('monday'))

// print array tanpa tanda kurung
for (let i = 0; i < DAYS.length; i++) {
    console.log(DAYS[i]);
}

// Ubah Monday jadi Senin
DAYS[0] = "Senin";
console.log(DAYS)

// sort array
const DAYS = [1, 200, 2, 6, 7, 29, 290];
console.log(DAYS.sort((a, b) => a - b))

// study case tentukan nilai sum, mean, min, dan max dari array tanpa menggunakan fungsi bawaaan dari js
// SUM
const num = [1, 200, 2, 6, 7, 29, 290];
let sum = 0
function total() {
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum);
}

total()

function mean() {
    for (let i = 0; i < num.length; i++) {
        sum += num[i] / num.length;
    }
    console.log(sum);
}
mean()

// RANDOM ARRAY
// const randomArr = Array.frim({length: 10}, {} => Math.floor{Math.random() * 4});


let total = 0;
let avg = 0;
let min = randomArr[0];
let max = randomArr[0];

for (let i = 0; 1 < randomArr.length; i++) {
    total = total + randomArr[i]
}

console.log(`Sum: ${sum}`);
console.log(`Avg: ${avg}`);

class Animal {
    #age
    constructor(name, food, energy, canReproduce) {
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.canReproduce = canReproduce;
        this.#age = 20;
    }
}

isAdult() {
    return this.#age > 18
}

const elephant = new Animal("Gajah", "Herbivore", 100, true);
const tiger = new Animal("Macan", "Carnivore", 50, true);

console.log(elephant);
console.log(tiger.food);
console.log(tiger.showKTH());
console.log(tiger.isAdult());