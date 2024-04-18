let number1 = '';
let operator = '';
let number2 = '';
const display = document.querySelector(".display");


function add(int1, int2) {
    return Number(int1) + Number(int2);
}

function subtract(int1, int2) {
    return int1 - int2;
}

function multiply(int1, int2) {
    return int1 * int2;
}

function divide(int1, int2) {
    if (Number(int2) == 0) {
        return "Did you really just try to divide by zero? Try again...";

    }
    else {
        return int1/int2;
    }
}

function operate (operator, int1, int2) {
    if (operator === "+") {
        return add(int1, int2);
    }

    else if (operator === "-") {
        return subtract(int1, int2);
    }

    else if (operator === "*") {
        return multiply(int1, int2);
    }

    else if (operator === "/") {
        return divide(int1, int2);
    }
}

function numberClick (number) {
    if (operator === '') {
        number1 = number1 + number;
        display.innerText = number1;
    }
    else {
        number2 = number2 + number;
        console.log(number2);
        display.innerText = number2;
    }
    return;
}

const buttonNumber = document.querySelectorAll(".number");

for (let i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener("click", function() {
        num = buttonNumber[i].innerText;
        console.log(num);
        numberClick(num);
    });
}


const buttonOperator = document.querySelectorAll(".operator");

for (let i = 0; i < buttonOperator.length; i++) {
    buttonOperator[i].addEventListener("click", function() {
        operatorText = buttonOperator[i].innerText;
        console.log(operatorText);
        operatorClick(operatorText);
    });
}

function operatorClick(operatorText) {
    if (operatorText == '=') {
        if (operator == '') {
            return;
        }
        else {
            display.innerText = operate(operator, number1, number2);
        }
    }
    else if (operator === '') {
        operator = operatorText;
    }
    else {
        number1 = operate(operator, number1, number2);
        number2 = '';
        operator = operatorText;

        display.innerText = number1;
    }
    return;
}

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", function() {
    clear();
    display.innerText = '';
    number1 = '';
    number2 = '';
    operator = '';

});

function clear() {
    display.innerText = '';
    number1 = '';
    number2 = '';
    operator = '';
}
//const buttonEquals = document.querySelector("1");
//const buttonClear = document.querySelector("1");
