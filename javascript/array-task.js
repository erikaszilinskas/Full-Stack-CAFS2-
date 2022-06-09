// Pabandykime atlikti 5 masyvo (Array) operacijas.
	
// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
	
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
	
// Viduryje esančią reikšmę pakeiskite „Classics“.
	
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
	
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.


// Rezultatai:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Jazz
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll
let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-nRoll");
console.log(styles);

styles[1] = "Classics";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);



// Sukurkite funkciją`getMaxSubSum(arr)`, kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.
let num = [11, -2, 34, 45, 19, 6];

function getMaxSubSum (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0 ) {
            sum += num[i];  
        }
    }
    return sum; 
}
console.log(getMaxSubSum(num));
console.assert(getMaxSubSum(num) == 115);








