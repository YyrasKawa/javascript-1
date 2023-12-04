const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;
if (budget > bmwX3Price) {
  message = "BMW";
} else if (budget > fordFocusPrice) {
  message = "Ford";
} else {
  message = "Bake";
}

console.log(`Я хочу купить ${message}`);

if (budget > bmwX3Price) {
  message = "BMW";
} else {
  message = "Bake";
}

console.log(`Я хочу купить ${message}`);

// Тернарные операторы

const messagePay = budget > bmwX3Price ? `BMW` : `Bike`;
console.log(`Я хочу капить ${messagePay}`)


const messageCar =
  budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? `Ford` : `Bike`;
console.log(`Я хочу капить ${messageCar}`);
