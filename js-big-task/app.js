// task #1
function alertButton() {
    alert("Hello World!");
}

// task #2
let textContent = document.getElementById("text-content");

function upperCase(event) {
    event.preventDefault();
    textContent.value = textContent.value.toUpperCase();
}
function lowerCase(event) {
    event.preventDefault();
    textContent.value = textContent.value.toLowerCase();
}
function firstUpperCase(event) {
    event.preventDefault();
    textContent.value = textContent.value[0].toUpperCase() + textContent.value.slice(1);
}
function firstLowerCase(event) {
    event.preventDefault();
    textContent.value = textContent.value[0].toLowerCase() + textContent.value.slice(1);
}

// task #3
let form = document.getElementById("form");
let msg = document.getElementById("message");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");

function validateSubmit(event) {
    event.preventDefault();
    if (phoneNumber.value == "" || email.value == "") {
        msg.textContent = "Phone number or Email is required !";
        msg.style.background = "red";
        return false;
    }
    
    msg.textContent = "Form submitted successful !";
    msg.style.background = "green";
}

// task #4
let textInput = document.getElementById("text-input");
function blockInput(event) {
    textInput.disabled = true;
}
function unBlockInput(event) {
    textInput.disabled = false;
}

// task #5
let image = document.getElementById("img");

function firstImage(){
    image.src = "https://www.clipartmax.com/png/small/4-40102_monkey-face-drawing-happy-monkey-face-clip-art-at-clker-monkey-face.png"
}

function secondImage(){
    image.src = "https://down.imgspng.com/download/0720/monkey_PNG18744.png"
}

// task #6
let contentToChange = document.getElementById("text-to-change");
let resetBtn = document.getElementById("reset-btn");

let textRed = document.getElementById("text-red");
let textGreen = document.getElementById("text-green");
let textBlue = document.getElementById("text-blue");

let borderRed = document.getElementById("border-red");
let borderGreen = document.getElementById("border-green");
let borderBlue = document.getElementById("border-blue");

let cursorPointer = document.getElementById("cursor-pointer");
let cursorText = document.getElementById("cursor-text");
let cursorCopy = document.getElementById("cursor-copy");

// task #6 - text colors functions
function redText(event) {
    event.preventDefault();
    contentToChange.style.color = "red";
}

function greenText(event) {
    event.preventDefault();
    contentToChange.style.color = "green";
}

function blueText(event) {
    event.preventDefault();
    contentToChange.style.color = "blue";
}

// task #6 - border colors 
function redBorder(event) {
    event.preventDefault();
    contentToChange.style.border = "1px solid red";
}

function greenBorder(event) {
    event.preventDefault();
    contentToChange.style.border = "1px solid green";
}

function blueBorder(event) {
    event.preventDefault();
    contentToChange.style.border = "1px solid blue";
}

// task #6 - cursors
function pointer_(event) {
    event.preventDefault();
    contentToChange.style.cursor = "pointer";
}

function text_(event) {
    event.preventDefault();
    contentToChange.style.cursor = "text";
}

function copy_(event) {
    event.preventDefault();
    contentToChange.style.cursor = "copy";
}

// task #6 - reset all button 
function resetAll(event) {
    event.preventDefault();
    contentToChange.style.color = "black";
    contentToChange.style.border = "none";
    contentToChange.style.cursor = "default";
}


// task #7
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("open-modal");
let closeBtn = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("alertBtn").addEventListener("click", alertButton);
    document.getElementById("upper-case-btn").addEventListener("click", upperCase);
    document.getElementById("lower-case-btn").addEventListener("click", lowerCase);
    document.getElementById("first-upper-case-btn").addEventListener("click", firstUpperCase);
    document.getElementById("first-lower-case-btn").addEventListener("click", firstLowerCase);
    form.addEventListener("submit", validateSubmit);
    document.getElementById("block-btn").addEventListener("click", blockInput);
    document.getElementById("unblock-btn").addEventListener("click", unBlockInput);
    image.addEventListener("mouseover", firstImage);
    image.addEventListener("mouseout", secondImage);
    textRed.addEventListener("click", redText);
    textGreen.addEventListener("click", greenText);
    textBlue.addEventListener("click", blueText);
    borderRed.addEventListener("click", redBorder);
    borderGreen.addEventListener("click", greenBorder);
    borderBlue.addEventListener("click", blueBorder);
    cursorPointer.addEventListener("click", pointer_);
    cursorText.addEventListener("click", text_);
    cursorCopy.addEventListener("click", copy_);
    resetBtn.addEventListener("click", resetAll);
});





