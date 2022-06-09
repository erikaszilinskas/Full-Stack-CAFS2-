function checkNumber(num) {
    if (isNaN(num)) {
        return false;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return "Skaičius dalijasi iš 3 ir iš 5";
    }

    if (num % 3 === 0) {
        return "Skaičius dalijasi iš 3";
    }
    if (num % 5 === 0) {
        return "Skaičius dalijasi iš 5";
    }

    return "Skaičius nesidalija nei iš 3 nei iš 5";
}

console.log(checkNumber(10));

for (let x = 9; x >= 1; x--) {
    console.log("hello" + x);   
}
