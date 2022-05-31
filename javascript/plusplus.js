function plusplus(a, b) {
    for (let i = 0; i < b; i++) {
        a++;
    }
    return a;
}

console.log(plusplus(10, 3));

function sumOfDigit(n) {
    if (n == 0) {
        return 0;
    }
    return (n % 10 + sumOfDigit(parseInt(n / 10)));
}

const num = 4321;
const result = sumOfDigit(num);
console.log("Sum of digits in " + num + " is " + result);

const sumOfDigitArrow = n => 
    n ?
    (n % 10) + sumOfDigitArrow(parseInt(n / 10)) : 0;

console.log(sumOfDigitArrow(4321));    




