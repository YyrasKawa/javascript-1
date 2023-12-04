const money = 10;
const canBuy = money > 50;

 if (canBuy) {
    console.log('Может купить наш продукт');
 } else if (money > 5) {
    console.log('Куплен мини продукт');
 } else {
    console.log('Не хватает баланса');
 }