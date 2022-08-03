<?php

// Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.
function square(int $a)
{
    return $a * $a;
}

echo "square result is: ", square(5);
echo '<br>';

// Parašykite funkciją, kuri grąžina dviejų skaičių sumą. Skaičiai perduodami funkcijos parametrus.
function twoNumberMath(int $a, int $b)
{
    return $a + $b;
}

echo "two number math result is: ", twoNumberMath(5, 10);
echo '<br>';
	
// Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.
function threeNumberMath(int $a, int $b, int $c)
{
    return ($b - $a) / $c;
}

echo "three number math result is: ", threeNumberMath(5, 3, 10);
echo '<br>';

// Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7, o grąžina savaitės dieną lietuvių kalba.
function weekDay(int $day)
{
    switch ($day) {
        case 1:
            return "Pirmadienis !";
            break;
        case 2:
            return "Antradienis !";
            break;
        case 3:
            return "Treciadienis !";
            break;
        case 4:
            return "Ketvirtadienis !";
            break;
        case 5:
            return "Penktadienis !";
            break;
        case 6:
            return "Sestadienis !";
            break;
        case 7:
            return "Sekmadienis !";
            break;
        default:
            return "Tokios savaites dienos nera !";
    }
}

echo weekDay(7);