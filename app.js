function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a**b;
}

//  Функция вышего порядка
function calculator(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;

}

let res = calculator(3, 5, add);
console.log(res);
res = calculator(3, 5, subtract);
console.log(res);
res = calculator(3, 5, power);
console.log(res);

// Callback (обратный вызов) - это функция, которую вы передаете другой функции в качестве аргумента. Эта переданная функция будет выполнена (вызвана) после завершения выполнения определенной задачи или события.

// Давайте рассмотрим простой пример на JavaScript:

function doSomethingAsync(callback) {
  // Предположим, что это асинхронная операция, например, загрузка данных из сети
  setTimeout(function () {
    console.log("Операция завершена!");
    callback(); // Вызываем переданную функцию обратного вызова
  }, 2000); // Задержка в 2 секунды, чтобы симулировать асинхронную операцию
}

function afterCallback() {
  console.log("Обратный вызов выполнен!");
}

// Вызываем функцию doSomethingAsync и передаем afterCallback в качестве обратного вызова
doSomethingAsync(afterCallback);

// В этом примере:

// doSomethingAsync - это функция, которая выполняет асинхронную операцию (задержка на 2 секунды) и принимает функцию callback в качестве аргумента.
// afterCallback - это функция, которая будет вызвана после завершения асинхронной операции.
// Мы вызываем doSomethingAsync и передаем afterCallback в качестве обратного вызова.
// Когда асинхронная операция завершится, функция afterCallback будет вызвана, и мы увидим вывод в консоли: