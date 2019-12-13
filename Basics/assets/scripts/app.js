const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    console.log(userInput.value);
    currentResult = currentResult + Number(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add)

let calculationDescription = `${defaultResult} + 10`
let errorMessage = 'An error \noccurred!'

// outputResult(currentResult, errorMessage);
