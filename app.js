'use strict';

const successMessge = 'Success';
const user = {
    name: 'Yury',
    roles: []
}

function addRole(user, role) {
    if (role == 'admin') {
        const message = 'Mistake';
        console.log(message);
        return user;
    }
    user.roles.push(role);
    console.log(successMessge);

    function logRoles() {
        console.log(user.roles);
    }
    logRoles();
    return user;
}

console.log(addRole(user, 'dev'))


