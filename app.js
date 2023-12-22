const userData = ['Yury', 41, 'Warsaw'];

function getData() {
    return ['Yury', 41, 'Warsaw'];
}

const [userName, _, city] = userData;

// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

console.log(userName, city);