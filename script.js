console.log("Hello World")

var day = "monday";
let month = "January";
const year = "2025";

//Declaration
let vehicle;

//Assignment
vehicle = "Mobil";

//Reassignment
vehicle = "Car";

// contoh
phi = 20;
console.log(phi)

//Tidak bisa di reassignment & Number
const PHI = 3.14;

// String
let firstName = "";
let fullName = "Siti";
let lastName = 'Aisyah';
// let middleName = ${fullName} Hello;

// Boolean : true or false
const hasJet = false;
const isMale = true;

// Null
const jet = null;

// Undefined
let shirts = undefined;

shirts = [];
shirts = {};

// NaN
console.log(fullName * 20);

console.log(20 + "1"); //hasilnya 201
console.log("20" + 1); //hasilnya 201
console.log("20" + "1"); //hasilnya 201
console.log("20" - "1"); //hasilnya 19

// Return value -> Boolean
/// equal
const isOne = 1 == "1";
console.log(isOne) //hasilnya true

const isOne = 1 == "2";
console.log(isOne) //hasilnya false

/// strict equal
const isOne = 1 === "1";
console.log(isOne) //hasilnya false karena mengecek isi dan tipe data

// Cek Tipe Variabel
const isString = typeof ("nama")
console.log(isString) //Nan akan bertipe Number, Null akan bertipe object

// Function
/// Melakukan sesuatu
function printName() {
    console.log(fullName)
}

/// Mengembalikan sesuatu
function getName() {
    return fullName;
}

let namaKu = getName()
console.log(namaKu) //hasilnya akan fullName ("Siti")

// Method
console.log("aisyah", toUpperCase()) //hasilnya akan "AISYAH"

// Write a code to calculate the BMI of a person who weight 60 kg and 170 cm of height

/// Manual
let weight = 60
let height = 168
let bmi = weight / ((height / 100) ** 2);

/// Pakai function
function getBMI(weight, height) {
    const bmi = weight / ((height / 100) ** 2)
    return bmi
}

console.log(getBMI(60, 170))

