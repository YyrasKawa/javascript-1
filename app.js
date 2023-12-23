const arr = [2, 4, 4, 10];

const average = arr.reduce((acc, value, i) => {
    if (i != arr.length - 1) {
        return acc + value;
    } else {
        return (acc + value) / arr.length
    }
}, 0);

console.log(average);
