<?php

$a = 1; 
for ($b = 0; $b < 9; $b++)
{
    for ($c = 0; $c <= $b; $c++ )
    {
        echo $a." ";
    }
    $a = $a + 1;
    echo "<br/>";
}
