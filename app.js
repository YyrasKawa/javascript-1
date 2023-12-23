const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
//     balance += operation;
// }

// console.log(balance);

// const finalBalance = operations.reduce((acc, value) => {
//     console.log(`acc ${acc} value ${value}`);
//     return acc += value;
// }, 0)

// const finalBalance2 = operations.reduce((acc, value) => acc += value, 0);

// console.log(finalBalance2);


const minElement = operations.reduce((acc, operation) => {
  if (operation > acc) {
    return acc;
  } else {
    return operation
  }
}, 0);

console.log(minElement)