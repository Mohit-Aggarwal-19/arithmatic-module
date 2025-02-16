import { upperCase as uppercase } from "upper-case";

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

function percentage(a,b){
    if(b!==0){
        return (a / b) * 100
    }else{
        return 'inderterminant';
    }
}

function upperCaseGreet(name){
    return uppercase(`hello ${name},greeting from MA`);
}

console.log(upperCaseGreet('mohit'));

module.exports = {
    'add': add,
    'subtract': subtract,
    'product': product,
    'divide': divide,
    'percentage': percentage,
    'greetings' : upperCaseGreet
};