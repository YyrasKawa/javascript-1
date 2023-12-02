// Шаблонные строки

const projectName = 'Site shop';
const price = 2000;
const author = 'Vasilij Pupkin';
const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template); 


const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2); 

const template3 = 'Project \n' + 'Price: ' + price + '$';
console.log(template3);

const template4 = `Project
Price: ${price}$`
console.log(template4);

