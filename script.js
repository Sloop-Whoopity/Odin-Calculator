let firstNumber = 0;
let secondNumber = 0;
let operator;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let regex = /[0-9.%]|\+\/\-/;
let operEx = /[^0-9.%]/;
let operatorInput = 0;  //Used to track if user has selected operator more than once and prevent unintended operate() call based on secondNumber resetting to 0;
let decimalCount = 0;
let firstNumberBoolean = false; //Detects whether the currently displayed number is the first or second number.
let styleOperators = /[^0-9.]/

buttons.forEach((button) => {
    if (regex.test(button.textContent)) { //We use a regular expression to match if a character is a number between 0-9.  Number function doesn't work because it was translating special characters as numbers as well
        console.log("These are the number buttons", button.textContent);
        button.classList.add("numbers");
    }
});

buttons.forEach((button) => {
    if (operEx.test(button.textContent)) {
        button.classList.add("operators");
        console.log("Operator ", button.textContent)
    }
});

buttons.forEach((button) => {
    if (styleOperators.test(button.textContent)) {
        button.style.backgroundColor = "rgb(233,245,255)";
    }
});

const numButtons = document.querySelectorAll(".numbers")
const operButtons = document.querySelectorAll(".operators")

numButtons.forEach((button) => button.addEventListener("click", () => {
    switch (button.textContent) {
        case ".":
            if (decimalCount > 0) { //Decimal count tracks how many decimals have been inserted into a number.  Resets when an operator is selected.
                console.log("You used too many decimals.  REturning!")
                return;
                } else {
                    decimalCount += 1;
                }
            break;
        
        case "+/-":  //Return function, because the +/- button doesn't represent a value that can be passed to the rest of the function.
        firstNumberBoolean === true ? firstNumber = firstNumber * -1 :
        secondNumber = secondNumber * -1;
        displayText();
        return;

        case "%":  //Return function, because the % button doesn't represent a value that can be passed to the rest of the function.
        firstNumberBoolean === true ? firstNumber = firstNumber/100 : 
        secondNumber = secondNumber/100;
        displayText();
        return;

    };
    if (operator != null) {
        firstNumberBoolean = false;
        secondNumber === 0 ? secondNumber = button.textContent :
        secondNumber += button.textContent;
        operatorInput = 0; //Resets operator input once a second number is inserted.
    } else {
        firstNumberBoolean = true;
        firstNumber === 0 ? firstNumber = button.textContent :
        firstNumber += button.textContent;
    }
    displayText();
    }
));

operButtons.forEach((button) => button.addEventListener("click", () => {
    switch (button.textContent) {
        case "+/-": //Unable to exclude "+/-" from operators list so telling function to ignore button if detected.
        return;

        case "CE": 
        firstNumber = 0;
        operator = null;
        secondNumber = 0;
        display.textContent = firstNumber;
        decimalCount = 0;
        return;
    };
    operatorInput += 1;
    decimalCount = 0;
    if (operator != null && operatorInput === 1) {
        operate(+firstNumber, operator, +secondNumber);
        };
    operator = button.textContent;  //Have the button that triggers the operate function change the operator after the calculation or set operator if operator is null.
    console.log("You've reached the end of the function")
    }
));

function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    if (b === 0) {
        alert("Do you really think you can divide by zero?  Ask Siri why you can't.")
        return 0;
    } else {
    return a/b;
    }
};

function operate(number1, operatorSign, number2) {
    if (operatorSign === "+") {
       firstNumber = add(number1,number2);
    } else if (operatorSign === "-") {
       firstNumber = subtract(number1, number2);
    } else if (operatorSign === "*") {
       firstNumber = multiply(number1, number2); 
    } else if (operatorSign === "/") {
       firstNumber = divide(number1, number2);
    }
    firstNumber = Math.round(firstNumber * 100000)/100000; // Curently rounding numbers for display purposes
    display.textContent = firstNumber;
    secondNumber = 0;
    firstNumberBoolean = true;
    return firstNumber;
}

function displayText() {
    if (secondNumber === 0) {
        display.textContent = firstNumber;
    } else {
        display.textContent = secondNumber;
    }
};
 

console.log(regex.test(5)) //Just a test for understanding regex.  Keeping the code in for memories.
