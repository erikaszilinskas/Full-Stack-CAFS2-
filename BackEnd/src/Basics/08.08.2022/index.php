<?php

require "index2.php";

if (empty($_GET['fname']) || empty($_GET['lname']) || empty($_GET['message'])) {

    echo " <br/> Please fill all the fields";
} else {
    $fname = $_GET['fname'];
    $lname = $_GET['lname'];
    $message = $_GET['message'];
    echo ('Your Name is: ' . $fname . '<br/>');
    echo ('Your Surname is: ' . $lname . '<br/>');
    echo ('You are from: ' . $message . '<br/>');

}
