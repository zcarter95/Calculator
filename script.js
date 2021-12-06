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
        case add:
            result = add(num1, num2);
            return result;
        case subtract: 
            result = subtract(num1, num2);
            return result;
        case multiply: 
            result = multiply(num1, num2);
            return result;
        case divide:
            result = divide(num1, num2);
            return result;
    }
}

const display = document.querySelector('.screen-text');
const numberButtons = document.querySelectorAll('.number-button');

let displayValue = 0;
display.textContent = displayValue;

//add event listener to all number buttons and update the display value
numberButtons.forEach(button =>{
    button.addEventListener('click', (event) => {
        if (displayValue === 0){
            displayValue = event.target.textContent;
        }
        else if (display.textContent.length < 9){
            displayValue += event.target.textContent;
        }
        else {
            return;
        }
        display.textContent = displayValue;
    })
})



