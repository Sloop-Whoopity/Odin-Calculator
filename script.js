let firstNumber = 0;
let secondNumber = 0;
let operator;


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function operate(number1, operatorSign, number2) {
    if (operatorSign === "+") {
       return add(number1,number2);
    } else if (operatorSign === "-") {
       return subtract(number1, number2);
    } else if (operatorSign === "*") {
       return multiply(number1, number2); 
    } else if (operatorSign === "/") {
       return divide(number1, number2);
    }
}