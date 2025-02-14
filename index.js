function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'indeterminant';
    }
}

module.exports = {
    'add': add,
    'subtract': subtract,
    'product': product,
    'divide': divide,
};