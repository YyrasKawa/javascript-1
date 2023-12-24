const arr = [1, 2, 3];
const [z, y, x] = arr;
console.log(y);

let user = {
    name: 'Yury',
    age: 41,
    city: 'Warsaw'
};

const {age, ...userWithouAge} = user;
console.log(age);
console.log(userWithouAge); 

const additinalData = {
    skills: ['Development', 'Design'],
    creditCard: '2342-2345-2734-2356'
};

// user.skills = additinalData.skills;

user = {
    ...user,
    ...additinalData
}

console.log(user);