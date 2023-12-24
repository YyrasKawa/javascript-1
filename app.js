const user = {
    name: 'Anton',
    id: 1
};

// const newUser = Object.assign({}, user);
// user.name = 'NewUser';
// console.log(user);
// console.log( newUser);


const newUser2 = {
    ...user
};

user.name = "NewUser";
console.log(user);
console.log(newUser2);