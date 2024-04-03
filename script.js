let firstNumber = 0;
let secondNumber = 0;
let operator;
let display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let regex = /[0-9]/; //Here we define the regular expression.  regex is all lowercase since it is an actual word
let operEx = /[^0-9]/; //This means any non-digit character.

console.log(regex.test(5))


buttons.forEach((button) => {
    if (regex.test(button.textContent)) { //We use a regular expression to match if a character is a number between 0-9.  Number function doesn't work because it was translating special characters as numbers as well
        console.log("These are the number buttons", button.textContent);
        button.classList.add("numbers");
    }
});

const numButtons = document.querySelectorAll(".numbers")

numButtons.forEach((button) => button.addEventListener("click", () => {
    // display.textContent = button.textContent;
    if (operator == null) {  //Not strictly equal since operator may start undefined
        firstNumber === 0 ? firstNumber = button.textContent :
        firstNumber += button.textContent;
            }
     }
    )
);

buttons.forEach((button) => {
    if (operEx.test(button.textContent)) {
        button.classList.add("operators");
        console.log("Operator ", button.textContent)
    }
});

const operButtons = document.querySelectorAll(".operators")

operButtons.forEach((button) => button.addEventListener("click", () => {
    if (button.textContent === "=") {
        if (secondNumber === "0") {
            return firstNumber
        } else {
            operate(+firstNumber, +operator, +secondNumber);
        }
    } else {
        operator = button.textContent;
    }
    }
));



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

function displayText() {
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}


    // if (button.classList === "numbers") {
    // button.addEventListener("click", () => {
    // display.textContent = button.textContent;
    // }
    // )}   