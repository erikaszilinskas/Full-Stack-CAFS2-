<?php

$hh = 24;
$mm = 0;
$ss = 0;

$seconds = $hh * 3600 + $mm * 60 + $ss;

echo sprintf('Number of seconds in 24 hours: %d', $seconds);
?>
