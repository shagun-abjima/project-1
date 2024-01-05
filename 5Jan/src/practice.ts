//Generic function
function loginAndReturn<T>(value: T): T {
    return value;
}

const numberResult = loginAndReturn<Number>(42);
const stringResult = loginAndReturn<String>("Shagun");
const boolResult = loginAndReturn<Boolean>(true);

//multiple type variable
//parameters of similar type

function add<T>(a: T, b: T) {
    console.log(typeof a)
    console.log(typeof b)
}
const result1 = add<Number>(4, 7);
const result2 = add<String>("A", "B");
//parameters of different type

function addition<T, U>(a: T, b: U) {
    console.log(typeof a)
    console.log(typeof b)
}
const result3 = addition<Number, String>(4, "A");
const result4 = addition<String, Boolean>("B", true);


//Interface
interface Greet {
    name: String;
    age: Number
}

const greets: Greet = {
    name: "shagun",
    age: 23
}
//classes
class People {
    name: String;
    private _age: Number;
    hobbies: string[];
    constructor(name: string, age: Number, hobbies: string[]) { }

    public set age(age: number) {
        if (age > 100 || age < 1) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    


}

class Students extends People {
    grade: number;
    constructor(name: string, age: Number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade;

    }
    introduce(): String {
        return `Hi, I'm ${this.name},I am ${this.age} years old.My hobbies are ${this.hobbies}. I am in grade ${this.grade} `
    }
}

const people1: People = new People("Shagun", 23, ["Sketching"]);
const people2: People = new People("Komal", 24, ["Dancing"]);
const people3: People = new People("Shreya", 20, ["Skating"]);
const student1: People = new Students("Anita", 19, ["Singing"], 12);

//Bank account Balance
class BankAccount {
    private _balance: number = 0;
    constructor(public name: String, public accNumber: number) {

    }

    public set balance(newBalance: number) {
        if (newBalance < 0) {
            throw new Error('this balance is not valid');
        }

        this._balance = newBalance;
    }
    public get balance(): number {

        if (this._balance === undefined) {
            throw new Error('balance is not defined.');
        }
        return this._balance;

    }

}
const user1: BankAccount = new BankAccount("komal", 124512);
user1.balance = 1000;
console.log(user1);
console.log(user1.balance);

//Temperature Convertor
class Temperature {
    private _celsius: number = 0;

    public get celsius(): number {

        return this._celsius;

    }

    public set celsius(newCelsius: number) {

        this._celsius = newCelsius;

    }
    //a getter method fahrenheit that coverts celsius to fahrenheit using the formula ( C * 9/5) + 32;
    public get fahrenheit() {

        return (this._celsius * 9) / 5 + 32;

    }
    //a setter method 
    public set fahrenheit(newFah: number) {

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
    public static PI: number = Math.PI;    //bydefault pi value is saved in ts it is static property
    //static methods
    public static Add(num1: number, num2: number): number {
        return num1 + num2;
    }
    public static Sub(num1: number, num2: number): number {
        return num1 - num2;
    }
    public static Mul(num1: number, num2: number): number {
        return num1 * num2;
    }
    public static Div(num1: number, num2: number): number {
        return num1 / num2;
    }
    public static Mod(num1: number, num2: number): number {

        return num1 % num2;

    }
}

console.log(MathOperation.PI);
console.log(MathOperation.Add(2, 2));
console.log(MathOperation.Sub(2, 2));
console.log(MathOperation.Mul(2, 2));
console.log(MathOperation.Div(2, 2));
console.log(MathOperation.Mod(2, 2));

const favHobbies = (hobby: string | string[]) => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((hobbies) => {
            console.log(hobbies);
        })
    }
    else {
        console.log(hobby);
    }

}
//favHobbies("cooking");
favHobbies(["cooking", "dancing"]);

//type v/s interfaces
//interface with classes
interface Stud1 {
    name: string;
    age: number;
}

interface StudAddr1 {
    city: string;
    addr: string;
}
interface Data1 extends Stud1, StudAddr1 { }          //interface use extends keyword and , sperator

class Bd implements Data1 {
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public addr: string
    ) {

    }
}

const BDD: Bd = new Bd("shagun", 25, "jaipur", "India");
console.log(BDD);





//type example
type Stud = {
    name: string;
    age: number;
}
type StudAddr = {
    city: string;
    addr: string;
}
type Data = Stud | StudAddr;   //we can use intersection also here  type Data = Stud & StudAddr

const BioData: Data = {
    name: "siya",
    age: 25,
    city: "jaipur"
}

console.log(BioData);

//interface example
interface Stud1 {
    name: string;
    age: number;
}

interface StudAddr1 {
    city: string;
    addr: string;
}
interface Data1 extends Stud1, StudAddr1 { }          //interface use extends keyword and , sperator

const BioData1: Data1 = {
    name: "kinjal",
    age: 25,
    city: "jaipur",
    addr: "India"
}

console.log(BioData1);                