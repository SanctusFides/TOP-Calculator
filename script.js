function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function operate(op,a,b) {
    const operator = op;

    switch(operator) {
        case "add":
            return add(a,b);
    }
    switch(operator) {
        case "subtract":
            return subtract(a,b);
    }
    switch(operator) {
        case "multiply":
            return multiply(a,b);
    }
    switch(operator) {
        case "divide":
            return divide(a,b);
    }

}

// Setting our screen object to be manipulated
let screen_text = document.querySelector('.screen');

// SHOULD I MAKE 2 STORAGE VARIABLES SO I CAN FEED THE OPERATE THE A AND B?
// OR SHOULD I JUST TRY TO DISECT THE CURRENT SCREEN VALUE WITH A SPLIT?
// LOOK MORE CLEARLY AT THE CRITERIA - LOOKS LIKE A AND B MIGHT BE BEST

// Sets up the number buttons to input their values into the screen
let digitButtons = document.querySelectorAll('.digit-button');
let digit_array = [...digitButtons];
digit_array.forEach(button => {
    button.addEventListener('click', () => {
        screen_text.textContent = screen_text.textContent + button.id;
    });
})

// Sets up the operator buttons to input their values into the screen (SANS EQUAL AND CLEAR)
let operatorButtons = document.querySelectorAll('.op-button');
let op_array = [...operatorButtons];
op_array.forEach(operator => {
    operator.addEventListener('click', () => {
        screen_text.textContent = screen_text.textContent + operator.id;
    });
})


// Clears the screen when clear button is clicked
let clear_button = document.querySelector('.clear-button');
clear_button.addEventListener('click', () => {
    screen_text.textContent = "";
})

