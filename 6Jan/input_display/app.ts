const number11 = document.getElementById("num1") as HTMLInputElement
const printButton1 = document.getElementById("printBtn") as HTMLButtonElement
const printValue1 = document.getElementById("enteredNumber") as HTMLOutputElement

function printEnteredValue1(): void{
    const numb1 = parseFloat(number11.value);
    printValue1.textContent = numb1.toString();

}

printButton1.addEventListener("click", printEnteredValue);