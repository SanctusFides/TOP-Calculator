// FUNCTION BLOCKS FOR THE OPERATOR CALCULATIONS
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
    if (a === 0 || b === 0) {
        alert("OH SO YOU THINK YOU'RE FUNNY DO YOU?! TRY AGAIN");
    }
    let divided = a/b
    if(!Number.isInteger(divided)) {
        return divided.toFixed(2);
    }
    return divided;
}
function operate(op,a,b) {
    const operator = op;

    switch(operator) {
        case "+":
            return add(a,b);
    }
    switch(operator) {
        case "-":
            return subtract(a,b);
    }
    switch(operator) {
        case "*":
            return multiply(a,b);
    }
    switch(operator) {
        case "/":
            return divide(a,b);
    }

}


// INSTANTIATING SECTION - creating variables and loading them with data if they need to contain it for the start
const screenTopText = document.querySelector('.screentop');
const screenBottomText = document.querySelector('.screenbottom');

// Top Equation is used to store text for the topscreen for manpulation - including operators which equals checks for
// NumA/B are used for individual value storing
let topEquation;
let numA;
let numB;
// FocusA switches the tracks from the first variable to the second. Also keeps equals from being accessible until after
// an operator has been selected and prevents it from being clicked after they already have clicked equals once
let focusA = true;


// BUTTON LOGIC SECTION
// Sets up the number buttons to input their values(from the ids) into the screen window
const digitButtons = document.querySelectorAll('.digit-button');
let digit_array = [...digitButtons];
digit_array.forEach(button => {
    button.addEventListener('click', () => {
        screenBottomText.textContent = screenBottomText.textContent + button.id;
    });
})

// Sets up the operator buttons to input their values(from the ids) into the screen
const operatorButtons = document.querySelectorAll('.op-button');
let op_array = [...operatorButtons];
op_array.forEach(operator => {
    operator.addEventListener('click', () => {
        // this all works, I just want to see if I can rework it to be simpler with 3 variables instead of textcontets
        // numA = screenBottomText.textContent;
        // topEquation = `${numA} ${operator.id}`;
        // screenBottomText.textContent = "";
        // screenTopText.textContent = topEquation;
        if (focusA) {
            numA = screenBottomText.textContent;
            topEquation = `${numA} ${operator.id}`;
            screenBottomText.textContent = "";
            screenTopText.textContent = topEquation;
            focusA = false;
        } else {
            numB = screenBottomText.textContent;
            focusA = true;
        }
    });
})

// Clears the screen when clear button is clicked
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    screenBottomText.textContent = "";
    screenTopText.textContent = "";
})


// LOGIC BLOCK FOR THE EQUALS BUTTON AND CALCULATIONS
const equalButton = document.querySelector('.equals')
equalButton.addEventListener('click', () => {

    // Setting this to only work when focusA is not active, this means it's ready to be equated
    if(!focusA) {
        console.log('A AINT FOCUSED')
        const bottomStaticText = screenBottomText.textContent;
        numB = screenBottomText.textContent;
        screenTopText.textContent = `${topEquation} ${bottomStaticText} = `
    
        if (topEquation.includes("+")) {
            screenBottomText.textContent =  operate("+", Number(numA), Number(numB));
            focusA = true;
        }
        if (topEquation.includes("-")) {
            screenBottomText.textContent =  operate("-", Number(numA), Number(numB));
            focusA = true;
        }
        if (topEquation.includes("*")) {
            screenBottomText.textContent =  operate("*", Number(numA), Number(numB));
            focusA = true;
        }
        if (topEquation.includes("/")) {
            screenBottomText.textContent =  operate("/", Number(numA), Number(numB));
            focusA = true;
        }
    }
})

