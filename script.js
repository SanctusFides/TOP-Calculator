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