const role = 'manager';

if (role === 'manager') {
  console.log("Manager");
} else if (role === "admin") {
  console.log("Admin");
} else if (role === "ceo") {
  console.log("CEO");
} else {
  console.log('Мы тебя не знаем');
}


switch (role) {
    case 'manager': // role === 'manager'
        console.log('Manager');
        break;
    case 'admin':
        console.log('Admin');
        break
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log("Мы тебя не знаем");
     
}
