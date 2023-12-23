const prices = [[100, 200], [120, 100], [200, 350]];

const positivePrice = prices
.map(difference => difference[1] - difference[0] )
.filter(positiv => positiv > 0);


console.log(positivePrice);


// const result = prices
// .map(product => product[1] - product[0])
// .filter(price => price > 0);

// console.log(result);