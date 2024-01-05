"use strict";
//Generic function
function loginAndReturn(value) {
    return value;
}
const numberResult = loginAndReturn(42);
const stringResult = loginAndReturn("Shagun");
const boolResult = loginAndReturn(true);
//multiple type variable
//parameters of similar type
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(4, 7);
const result2 = add("A", "B");
//parameters of different type
function addition(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result3 = addition(4, "A");
const result4 = addition("B", true);
const greets = {
    name: "shagun",
    age: 23
};
//classes
class People {
    constructor(name, age, hobbies) { }
    set age(age) {
        if (age > 100 || age < 1) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
}
class Students extends People {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `Hi, I'm ${this.name},I am ${this.age} years old.My hobbies are ${this.hobbies}. I am in grade ${this.grade} `;
    }
}
const people1 = new People("Shagun", 23, ["Sketching"]);
const people2 = new People("Komal", 24, ["Dancing"]);
const people3 = new People("Shreya", 20, ["Skating"]);
const student1 = new Students("Anita", 19, ["Singing"], 12);
//Bank account Balance
class BankAccount {
    constructor(name, accNumber) {
        this.name = name;
        this.accNumber = accNumber;
        this._balance = 0;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error('this balance is not valid');
        }
        this._balance = newBalance;
    }
    get balance() {
        if (this._balance === undefined) {
            throw new Error('balance is not defined.');
        }
        return this._balance;
    }
}
const user1 = new BankAccount("komal", 124512);
user1.balance = 1000;
console.log(user1);
console.log(user1.balance);
//Temperature Convertor
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    //a getter method fahrenheit that coverts celsius to fahrenheit using the formula ( C * 9/5) + 32;
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    //a setter method 
    set fahrenheit(newFah) {
        this._celsius = ((newFah - 32) * 5) / 9;
    }
}
const temp = new Temperature();
//for converting celsius into fahrenheit
temp.celsius = 25;
console.log(temp.fahrenheit);
//for converting fahrenheit into celsius
temp.fahrenheit = 77;
console.log(temp.celsius);
//static properties and methods of a class
class MathOperation {
    //static methods
    static Add(num1, num2) {
        return num1 + num2;
    }
    static Sub(num1, num2) {
        return num1 - num2;
    }
    static Mul(num1, num2) {
        return num1 * num2;
    }
    static Div(num1, num2) {
        return num1 / num2;
    }
    static Mod(num1, num2) {
        return num1 % num2;
    }
}
MathOperation.PI = Math.PI; //bydefault pi value is saved in ts it is static property
console.log(MathOperation.PI);
console.log(MathOperation.Add(2, 2));
console.log(MathOperation.Sub(2, 2));
console.log(MathOperation.Mul(2, 2));
console.log(MathOperation.Div(2, 2));
console.log(MathOperation.Mod(2, 2));
const favHobbies = (hobby) => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((hobbies) => {
            console.log(hobbies);
        });
    }
    else {
        console.log(hobby);
    }
};
//favHobbies("cooking");
favHobbies(["cooking", "dancing"]);
class Bd {
    constructor(name, age, city, addr) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.addr = addr;
    }
}
const BDD = new Bd("shagun", 25, "jaipur", "India");
console.log(BDD);
const BioData = {
    name: "siya",
    age: 25,
    city: "jaipur"
};
console.log(BioData);
const BioData1 = {
    name: "kinjal",
    age: 25,
    city: "jaipur",
    addr: "India"
};
console.log(BioData1);
