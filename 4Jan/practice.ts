//------------TUPLES--------
//Defining tuple type for person Information
type personInfo=[string,number,boolean]
//function to display personal information
const displayPersonInfo = 
(person:personInfo)=>{
const [name,age,hasDrivingLicense]=person;
console.log(`Name: ${name} , Age: ${age} , DriversLicense: ${hasDrivingLicense?"Yes":"No"}`)
}

//Example usage
const person1:personInfo=["Shagun",23,true]
const person2:personInfo=["Ritika",21,true]

//calling 
displayPersonInfo(person1);
displayPersonInfo(person2);


//----------------------------Q1
//You are building a simple ecommerce application and need to store product information.Define a tuple Type called productinfo to represent each product containing the following elements 
//Product name(string)
//Price(number)
//Quantity(number)
//create two product instance using this tuple type and display there information

type productinfo=[string,number,number]

const productDetails=
(product:productinfo)=>{
const[product_name, price, quantity]=product;
console.log(`Product Name: ${product_name} , Price: ${price} , Quantity: ${quantity}`)
}

const product1:productinfo=["Phone", 20000,1];
const product2:productinfo=["AC", 60000,1];

productDetails(product1);
productDetails(product2);

//------------------------------UNION
const inputValue=(value: string | number | boolean)=>{
console.log(value);
}

inputValue(55);
inputValue("Ajay");
inputValue(true);

//---------------------------QUESTION

const userInput = (value: string | number | boolean)=>{
    if(typeof value === "number"){
        const n=value*2;
        console.log("Number="+n)
    }
    else{
        console.log(value)

    }
}
userInput(4)
userInput("Shagun")
userInput(true)

//------------------INTERSECTIONS
 type People1={
    name:string;
    age:number;
 }
 type Employee1={
    emp_id:number;
    department:string;
 }
type employeeDetail= People1 & Employee1;

const us1:employeeDetail={
    name:"shagun",
    age:23,
    emp_id:111,
    department:"IT"
    
}
//------------------GENERICS
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]