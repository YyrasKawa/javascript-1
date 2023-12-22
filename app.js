const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);

console.log(roles);
console.log(res);

const res2 = roles.slice(2, 3);

console.log(roles);
console.log(res2);

const res3 = roles.slice(-1);
const res4 = roles[roles.length - 1];

console.log(res3);
console.log(res4);


console.log(roles);

// const res5 = roles.splice(2, 1);
// console.log(res5);
// console.log(roles);

const res6 = roles.reverse();
console.log(res6);

const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);
