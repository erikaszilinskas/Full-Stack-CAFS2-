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

let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
function getFavoriteCity(name, surname, city) {
    let user = `${name} ${surname}`;
    let favoriteCity = city;
    return `${user} favorite city is ${favoriteCity}`;
}
getFavoriteCity("Name", "Surname", cities[5]);









