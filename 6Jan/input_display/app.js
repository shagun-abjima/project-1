"use strict";
const number1 = document.getElementById("num1");
const printButton = document.getElementById("printBtn");
const printValue = document.getElementById("enteredNumber");
function printEnteredValue() {
    const numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
printButton.addEventListener("click", printEnteredValue);
