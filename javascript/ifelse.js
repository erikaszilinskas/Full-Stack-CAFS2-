let num = parseInt(prompt('enter the number of musicians'));

if (num === 0) {
    console.log('not a group');
} else if (num === 1) {
    console.log('Solo musician');
} else if (num === 2) {
    console.log('Duet');
} else if (num === 3) {
    console.log('Trio group');
} else if (num === 4) {
    console.log('Its a quertet');
}else if (num > 4) {
    console.log('Its a rock band');
} else {
    console.log('please enter the number');
}