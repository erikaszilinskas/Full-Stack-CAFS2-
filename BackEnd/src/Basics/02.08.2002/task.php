<?php
//Sukurkite "a", "b", "c" masyvą. Išveskite masyvo reikšmę naudodami funkciją var_dump().
	
//Naudodamiesi $arr masyvu iš ankstesnės užduoties, išveskite pirmo, antro ir trečio elementų turinį.
	
//Sukurkite masyvą $arr = ['a', 'b', 'c', 'd'] ir panaudoja jį išveskite eilutė 'a + b, c + d'.
	
//Sukurkite $arr masyvą su elementais 2, 5, 3, 9. Padauginkite pirmąjį masyvo elementą iš antrojo, o trečiąjį elementą iš ketvirtojo. Sudėkite rezultatus ir priskirkite kintamajam $result. Išveskite šio kintamojo reikšmę.
	
//Užpildykite $arr masyvą skaičiais nuo 1 iki 5. Nedeklaruokite masyvo elementų, o tiesiog užpildykite jį $arr[] = nauja reikšme.

// task #1
$testArray = ["a", "b", "c"];

var_dump($testArray);
echo '<br>';

//task #2
 echo "{$testArray[0]}, {$testArray[1]}, {$testArray[2]}";
 echo '<br>';

 //task #3
$arr = ['a', 'b', 'c', 'd'];
echo "{$arr[0]} + {$arr[1]}, {$arr[2]} + {$arr[3]}";
echo '<br>';

//task #4
$numbersArr = [2, 5, 3, 9];
$numResult = ($numbersArr[0] * $numbersArr[1]) + ($numbersArr[2] * $numbersArr[3]);
echo "result is: {$numResult}";
echo '<br>';

//task #5
$secondArr = range(1,5);
var_dump($secondArr);












