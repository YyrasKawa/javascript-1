const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910)3235356';
const num5 = " +7(910) 323-53-56 ";

const num6 = "891032353";
const num7 = "+7d910323-53-56";
const num8 = "9+7103235356";

function isPhoneNumber(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }

    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll(' ', '');
    num = num.replaceAll('-', '');
    if (num.length !=11) {
        return false;
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num6));
console.log(isPhoneNumber(num7));
console.log(isPhoneNumber(num8));






