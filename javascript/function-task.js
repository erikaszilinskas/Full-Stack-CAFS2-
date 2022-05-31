function checkAge(age) {
    return ((age >18) ? true : confirm('Did parents allow you?'));
}
 

function min(a, b) {
    if (a < b) {
        return a;
    } else if (b <= a) {
        return b;
    } 
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));