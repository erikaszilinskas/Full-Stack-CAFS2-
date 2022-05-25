function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let a = parseFloat(getRandomArbitrary(1,10).toFixed(2));
    b = parseFloat(getRandomArbitrary(1,10).toFixed(2));
    c = parseFloat(getRandomArbitrary(1,10).toFixed(2));
    d = parseFloat(getRandomArbitrary(1,10).toFixed(2));
    e = parseFloat(getRandomArbitrary(1,10).toFixed(2));

console.log('your 5 random numbers:', a, b, c, d, e);

console.log('lowest number:', + Math.min(a, b, c, d, e));
console.log('highest number:', + Math.max(a, b, c, d, e));