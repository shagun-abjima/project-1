"use strict";
//function to display personal information
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    console.log(`Name: ${name} , Age: ${age} , DriversLicense: ${hasDrivingLicense ? "Yes" : "No"}`);
};
//Example usage
const person1 = ["Shagun", 23, true];
const person2 = ["Ritika", 21, true];
//calling 
displayPersonInfo(person1);
displayPersonInfo(person2);
const productDetails = (product) => {
    const [product_name, price, quantity] = product;
    console.log(`Product Name: ${product_name} , Price: ${price} , Quantity: ${quantity}`);
};
const product1 = ["Phone", 20000, 1];
const product2 = ["AC", 60000, 1];
productDetails(product1);
productDetails(product2);
//------------------------------UNION
const inputValue = (value) => {
    console.log(value);
};
inputValue(55);
inputValue("Ajay");
inputValue(true);
//---------------------------QUESTION
const userInput = (value) => {
    if (typeof value === "number") {
        const n = value * 2;
        console.log("Number=" + n);
    }
    else {
        console.log(value);
    }
};
userInput(4);
userInput("Shagun");
userInput(true);
const us1 = {
    name: "shagun",
    age: 23,
    emp_id: 111,
    department: "IT"
};
//------------------GENERICS
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
