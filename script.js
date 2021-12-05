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

console.log(operate(divide, 2, 2))