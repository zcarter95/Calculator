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
    if (num2 === 0){
        return 'ERROR';
    }
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
    history.textContent = '';
}

//elements
const display = document.querySelector('.screen-text');
const history = document.querySelector('.operations');
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
let inputHistory = [];

//add event listener to all number buttons and update the display value
numberButtons.forEach(button =>{
    button.addEventListener('click', (event) => {
        inputHistory.push(event.target.classList[1]);
        if (displayValue === 0){
            displayValue = event.target.textContent;
            if (num1Input){
                result = 0;
                num1 = displayValue
            }
            else if (!num1Input){
                num2 = displayValue
                history.textContent += ` ${num2}`
            }
        }
        else if (display.textContent.length < 9){
            displayValue += event.target.textContent;
            if (num1Input){
                result = 0;
                num1 = displayValue
            }
            else if (!num1Input){
                num2 = displayValue
                history.textContent += ` ${num2}`
            }
        }
        else {
            return;
        }
        display.textContent = displayValue;
    })
})

function equals (number1, number2, math){
    let float1 = parseFloat(number1);
    let float2 = parseFloat(number2);
    result = operate(math, float1, float2);
    display.textContent = result;
    return result;
}

operators.forEach(button => {
    button.addEventListener('click', (event) => {
        displayValue = 0;
        num1Input = false;
        inputHistory.push(event.target.classList[0]);
        let previousOperator = inputHistory[inputHistory.length - 3];
        switch (event.target.classList[0]){
            case 'plus-button': {
                operator = 0;
                if (previousOperator === 'plus-button'){
                    equals(num1, num2, operator);
                    num1 = result;
                    num1Input = false;
                }
                else if (previousOperator === 'divide-button' || previousOperator === 'times-button' || previousOperator === 'minus-button'){
                    
                    switch (previousOperator){
                        case 'minus-button': {
                            equals(num1, num2, 1);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'times-buton': {
                            equals(num1, num2, 2);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'divide-button': {
                            equals(num1, num2, 3);
                            num1 = result;
                            num1Input = false;
                        }
                    }
                }
                history.textContent = `${num1} +`;
                break;
            }
            case 'minus-button': {
                operator = 1;
                if (previousOperator === 'minus-button'){
                    equals(num1, num2, operator);
                    num1 = result;
                    num1Input = false;
                }
                else if (previousOperator === 'plus-button' || previousOperator === 'times-button' || previousOperator === 'divide-button'){
                    console.log(`num1: ${num1}, result: ${result}`);
                    switch (previousOperator){
                        case 'plus-button': {
                            equals(num1, num2, 0);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'times-buton': {
                            equals(num1, num2, 2);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'divide-button': {
                            equals(num1, num2, 3);
                            num1 = result;
                            num1Input = false;
                        }
                    }
                }
                history.textContent = `${num1} -`
                break;
            }
            case 'times-button': {
                operator = 2;
                if (previousOperator === 'times-button'){
                    equals(num1, num2, operator);
                    num1 = result;
                    num1Input = false;
                }
                else if (previousOperator === 'plus-button' || previousOperator === 'divide-button' || previousOperator === 'minus-button'){
                    console.log(previousOperator);
                    switch (previousOperator){
                        case 'plus-button': {
                            equals(num1, num2, 0);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'minus-button': {
                            console.log(`num1: ${num1}, num2: ${num2}`);
                            equals(num1, num2, 1);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'divide-button': {
                            equals(num1, num2, 3);
                            num1 = result;
                            num1Input = false;
                        }
                    }
                }
                history.textContent = `${num1} x`;
                break;
            }
            case 'divide-button': {
                operator = 3;
                if (previousOperator === 'divide-button'){
                    equals(num1, num2, operator);
                    num1 = result;
                    num1Input = false;
                }
                else if (previousOperator === 'plus-button' || previousOperator === 'times-button' || previousOperator === 'minus-button'){
                    switch (previousOperator){
                        case 'plus-button': {
                            console.log('I should add previous two numbers');
                            equals(num1, num2, 0);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'minus-buton': {
                            equals(num1, num2, 1);
                            num1 = result;
                            num1Input = false;
                            break;
                        }
                        case 'times-button': {
                            equals(num1, num2, 2);
                            num1 = result;
                            num1Input = false;
                        }
                    }
                }
                history.textContent = `${num1} \u00F7`
                break;
            }
            
        }
    })
})

equalButton.addEventListener('click', () =>{
    equals(num1, num2, operator);
    clear();
    num1 = result;
    lastKeyPressed = 'equals-button';
})

clearButton.addEventListener('click', () => {
    clear();
    display.textContent = displayValue;
    lastKeyPressed = 'clear';
    inputHistory = [];
})









