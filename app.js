// Базовые арифмитические операторы

const width = 10;
const height = 5;
const space = width * height; 
const volume = 2 ** 3;
console.log(space);
console.log(volume);


// Строки

const city = 'Warszawa';
const street = 'Plotska'
console.log(city + ', ' + street + ' ' + 5); // Конкатенация


// Операторы присваивания

let age = 18;
age += 2; // age = age + 2
age -= 2; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1


console.log(age);

//  Операторы сравнения

const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);