const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return Number(userInput.value);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        results: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calulateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    createAndWriteOutput(mathOperator, initalResult, enteredNumber);
    writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
    calulateResult("ADD");
}

function subtract() {
    calulateResult("SUBTRACT");
}

function multiply() {
    calulateResult("MULTIPLY");
}

function divide() {
    calulateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

let calculationDescription = `${defaultResult} + 10`;
let errorMessage = "An error \noccurred!";

// outputResult(currentResult, errorMessage);
