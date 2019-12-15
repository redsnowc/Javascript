const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
    return Number(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", initalResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initalResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

let calculationDescription = `${defaultResult} + 10`;
let errorMessage = "An error \noccurred!";

// outputResult(currentResult, errorMessage);
