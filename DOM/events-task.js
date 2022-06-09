const textInput = document.querySelector("#text-input");
const btn = document.querySelector("button");
const textOutput = document.querySelector("#text-output");

btn.addEventListener('click', moveText)

function moveText() {
    textOutput.value = textInput.value;
}


