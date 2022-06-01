function getLaughFor(numHa) {
    let result = "ha";
    let msg = "";
    for (let i = 0; i < numHa; i++) {
        msg += result;
    }
    return msg + '!';
}

function getLaughDoWhile(numHa) {
    let result = "ha";
    let i = 0;
    let msg = "";
    do {
        msg += result;
        i++;
    } while (i < numHa);
    return msg + '!';
}

function getLaughWhile(numHa) {
    let result = "ha";
    let i = 0;
    let msg = "";
    while (i < numHa) {
        msg += result;
        i++;
    }
    return msg + '!';
}

console.log('For loop:', getLaughFor(5));
console.log('Do/While loop:', getLaughDoWhile(3));
console.log('While loop:', getLaughWhile(2));
