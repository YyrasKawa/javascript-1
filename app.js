const users = ['Yury', 'Mari', 'Alex', 'Anna'];
console.log(users);
users.sort();
console.log(users);

const operations = [100, -300, -100, 50, 480];
operations.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
})
console.log(operations);

operations.sort((a, b) => b - a);
console.log(operations)