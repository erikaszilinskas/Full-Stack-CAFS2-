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
function weekDay(int $number)
{
    switch ($number) {
        case 1:
            echo "Pirmadienis !";
            break;
        case 2:
            echo "Antradienis !";
            break;
        case 3:
            echo "Treciadienis !";
            break;
        case 4:
            echo "Ketvirtadienis !";
            break;
        case 5:
            echo "Penktadienis !";
            break;
        case 6:
            echo "Sestadienis !";
            break;
        case 7:
            echo "Sekmadienis !";
            break;
        default:
          echo "Tokios savaites dienos nera !";
    }
}

weekDay(7);