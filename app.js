const users = ['Ana', 'Victoria', 'Kate'];
console.log(users);
users[2] = 'Sonia';
console.log(users);
users[3] = 'Maxim';
console.log(users);
users[5] = 'Titan';
console.log(users.length);

const arrLenght = users.push('Nikita');
console.log(users);
console.log(arrLenght);

users.unshift('Vasia');
console.log(users);

const el = users.pop();
console.log(users);
console.log(el);

users.shift();
console.log(users);




