function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function operate (operator, num1, num2){
    let result;
    switch (operator){
        case 0:
            result = add(num1, num2);
            return result;
        case 1: 
            result = subtract(num1, num2);
            return result;
        case 2: 
            result = multiply(num1, num2);
            return result;
        case 3:
            result = divide(num1, num2);
            return result;
    }
}

function clear(){
    num1 = 0;
    num2 = 0;
    displayValue = 0;
    num1Input = true;
}

console.log(operate(0, 2, 2));

//elements
const display = document.querySelector('.screen-text');
const numberButtons = document.querySelectorAll('.number-button');
const equalButton = document.querySelector('.equals-button');
const operators = document.querySelectorAll('.operator-button');
const clearButton = document.querySelector('.clear-button');

let displayValue = 0;
let result = 0;
let num1 = displayValue;
let num2 = 0;
let operator;
display.textContent = displayValue;

let num1Input = true;

//add event listener to all number buttons and update the display value
numberButtons.forEach(button =>{
    button.addEventListener('click', (event) => {
        if (displayValue === 0){
            displayValue = event.target.textContent;
            if (num1Input){
                num1 = displayValue
                console.log(`num1: ${num1}`);
                console.log(`num2: ${num2}`);
            }
            else if (!num1Input){
                num2 = displayValue
                console.log(`num1: ${num1}`);
                console.log(`num2: ${num2}`);
            }
        }
        else if (display.textContent.length < 9){
            displayValue += event.target.textContent;
            if (num1Input){
                num1 = displayValue
                console.log(`num1: ${num1}`);
                console.log(`num2: ${num2}`);
            }
            else if (!num1Input){
                num2 = displayValue
                console.log(`num1: ${num1}`);
                console.log(`num2: ${num2}`);
            }
        }
        else {
            return;
        }
        display.textContent = displayValue;
    })
})

operators.forEach(button => {
    button.addEventListener('click', (event) => {
        displayValue = 0;
        num1Input = false;
        
        switch (event.target.classList[0]){
            case 'plus-button': {
                operator = 0;
                console.log(`operator: ${operator}`);
                break;
            }
            case 'minus-button': {
                operator = 1;
                console.log(operator);
                break;
            }
            case 'times-button': {
                operator = 2;
                console.log(operator);
                break;
            }
            case 'divide-button': {
                operator = 3;
                console.log(operator);
                break;
            }
            
        }
    })
})

equalButton.addEventListener('click', () =>{
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    result = operate(operator, int1, int2);
    display.textContent = result;
    clear();
})

clearButton.addEventListener('click', () => {
    clear();
    display.textContent = displayValue;
})









