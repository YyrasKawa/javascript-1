const secretNumber = 7;

if (secretNumber === 7) {
    console.log('Угадал строго')
}


if (Number(secretNumber) == 7) {
  console.log("Угадал не строго");
}


const q = Number(prompt('Введите число'));
if (q === 7) {
    console.log('!')
} else {
    console.log('Не угадал!'3);
}
