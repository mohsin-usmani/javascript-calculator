
let outputElement = document.getElementById("output");

let addElement = document.getElementById("add");
let subtractElement = document.getElementById("subtract");
let multiplyElement = document.getElementById("multiply");
let divideElement = document.getElementById("divide");

let calculateElement = document.getElementById("calculate");

// Number buttons
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let button0 = document.getElementById("0");

// Variables
let firstNumber = "";
let secondNumber = "";
let selectedOperation = "";
let isSecondNumber = false;

// Display initial value
outputElement.textContent = "0";

// Function to enter numbers
function enterNumber(number) {

    if (isSecondNumber === false) {
        firstNumber = firstNumber + number;
        outputElement.textContent = firstNumber;
    }
    else {
        secondNumber = secondNumber + number;
        outputElement.textContent = secondNumber;
    }

}

// Number button events
button1.addEventListener("click", function () {
    enterNumber("1");
});

button2.addEventListener("click", function () {
    enterNumber("2");
});

button3.addEventListener("click", function () {
    enterNumber("3");
});

button4.addEventListener("click", function () {
    enterNumber("4");
});

button5.addEventListener("click", function () {
    enterNumber("5");
});

button6.addEventListener("click", function () {
    enterNumber("6");
});

button7.addEventListener("click", function () {
    enterNumber("7");
});

button8.addEventListener("click", function () {
    enterNumber("8");
});

button9.addEventListener("click", function () {
    enterNumber("9");
});

button0.addEventListener("click", function () {
    enterNumber("0");
});

// Addition
addElement.addEventListener("click", function () {
    selectedOperation = "+";
    isSecondNumber = true;
    addElement.style.backgroundColor = "lightblue";
});

// Subtraction
subtractElement.addEventListener("click", function () {
    selectedOperation = "-";
    isSecondNumber = true;
    subtractElement.style.backgroundColor = "lightblue";
});

// Multiplication
multiplyElement.addEventListener("click", function () {
    selectedOperation = "*";
    isSecondNumber = true;
    multiplyElement.style.backgroundColor = "lightblue";
});

// Division
divideElement.addEventListener("click", function () {
    selectedOperation = "/";
    isSecondNumber = true;
    divideElement.style.backgroundColor = "lightblue";
});

// Calculate
calculateElement.addEventListener("click", function () {

    let value1 = Number(firstNumber);
    let value2 = Number(secondNumber);

    let result;

    if (firstNumber === "" || secondNumber === "" || selectedOperation === "") {
        outputElement.textContent = "Enter both numbers";
        return;
    }

    switch (selectedOperation) {

        case "+":
            result = value1 + value2;
            break;

        case "-":
            result = value1 - value2;
            break;

        case "*":
            result = value1 * value2;
            break;

        case "/":
            if (value2 === 0) {
                outputElement.textContent = "Cannot divide by 0";
                return;
            }
            result = value1 / value2;
            break;

    }

    outputElement.textContent = result;

    // Reset values for next calculation
    firstNumber = String(result);
    secondNumber = "";
    selectedOperation = "";
    isSecondNumber = false;

    addElement.style.backgroundColor = "";
    subtractElement.style.backgroundColor = "";
    multiplyElement.style.backgroundColor = "";
    divideElement.style.backgroundColor = "";

});
