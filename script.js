let firstNumber = 0;
let secondNumber = 0;
let operator;
let display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let regex = /[0-9]/; //Here we define the regular expression.  regex is all lowercase since it is an actual word
let operEx = /[^0-9]/; //This means any non-digit character.
let result;
let array1 = []
let operatorInput = 0;  //Used to track if user has selected operator more than once and prevent unintended operate() call based on secondNumber resetting to 0;


console.log(regex.test(5))


buttons.forEach((button) => {
    if (regex.test(button.textContent)) { //We use a regular expression to match if a character is a number between 0-9.  Number function doesn't work because it was translating special characters as numbers as well
        console.log("These are the number buttons", button.textContent);
        button.classList.add("numbers");
    }
});

const numButtons = document.querySelectorAll(".numbers")

numButtons.forEach((button) => button.addEventListener("click", () => {
    if (operator != null && firstNumber != 0) {
        secondNumber === 0 ? secondNumber = button.textContent :
        secondNumber += button.textContent;
        operatorInput = 0;
    } else {
        firstNumber === 0 ? firstNumber = button.textContent :
        firstNumber += button.textContent;
        operator = null; //Allows user to type in firstNumber again if they reset first number to 0 through multiplication.
    }
    
    displayText();
    // firstNumber === 0 ? firstNumber = button.textContent :
    // firstNumber += button.textContent;
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
    operatorInput += 1;
    if (button.textContent === "C") {
        firstNumber = 0;
        operator = null;
        secondNumber = 0;
        display.textContent = firstNumber;
        return
    } else if (operator != null && operatorInput === 1) {
        operate(+firstNumber, operator, +secondNumber);
        };
    operator = button.textContent;  //Have the button that triggers the operate function change the operator after the calculation or set operator if operator is null.
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
    return firstNumber;
}

function displayText() {
    if (secondNumber === 0) { //&& operator == null
        display.textContent = firstNumber;
    } else {
        display.textContent = secondNumber;
    }
};
 

//Evaluate what the user is putting in each time they put in an input.  So if they input the + twice, then they fucked up.