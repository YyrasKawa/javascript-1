const roles = ['user', 'admin', 'manager'];

console.log(roles.indexOf('admin'));



if (roles.indexOf('admin') >= 0) {
    console.log('Yes')
}

console.log(roles.includes('admin'));
console.log(roles.includes("superuser"));

if (roles.includes("admin")) {
  console.log("Yes");
}