document.getElementById("calculate").addEventListener("click", function () {

    document.getElementById("result").innerText = " ";
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const op = document.getElementById("op").value;
    document.getElementById("result").innerText += calculate(num1, num2, op)
})

function calculate(num1, num2, op) {

    switch (op) {
        case '+':
            return num1 + num2

        case '-':
            return num1 - num2

        case '*':
            return num1 * num2

        case '/':
            return num1 / num2

    }
}