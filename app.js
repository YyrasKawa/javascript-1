const moneyBank = 12000 * (1 + 0.07 / 12) ** 24;
const costHouse = 13500;

if (moneyBank >= costHouse) {
    console.log(`Вася сможет купить дом за ${costHouse}$`)
} else {
    console.log(`Вася не сможет купить дом за ${costHouse}$`);
}


console.log(`У Васи есть ${moneyBank}$`);

// -------------------------------

const deposit = 12000;
const rate = 0.07; 
const depositLength = 24;
const houseCost = 13500;
const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
    console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}$`)
} else {
    console.log(`Купить не сможем `)
}