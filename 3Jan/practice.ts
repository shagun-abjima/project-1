const greet=(name:string ,id:number):string=>{
return `Welcome, ${name} ,your id is ${id}`
}
const emp=greet("vinod",3);
console.log(emp);
//--------------------ARRAYS
//--------------------USING SQUARE BRACKETS
const a:number[]=[1,2,3,4];
console.log(a);
//--------------------USING ARRAY CONSTRUCTOR
const b:number[]=new Array(1,2,3,4);
console.log(b);
//--------------------USING ARRAY METHODS
const c:string[]=Array.of("A","B","C","D");
console.log(c);
//--------------------
const fruits:string[]=["Apple","Mango","Grapes","Guava"];
const updatedFruits= fruits.push("Orange");
console.log(updatedFruits);//will print no of values in an array
console.log(fruits);//will print array including new value

const removeFruit=fruits.pop();
console.log(removeFruit);//will print last element from array which is removed
console.log(fruits);//will print the updated array

//traversing through for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//for...in loop 
for(const fruit in fruits){
    console.log(fruits[fruit]);
}
//for...of loop
for(const fruit of fruits){
    console.log(fruit);
}
//for each 
fruits.forEach((val:string)=>console.log(val));

//map method
//map method creates a new array by applying function to each element of original array

//doubling each element
const doubleData:number[]=a.map((val:number)=> val*2)
console.log(doubleData)

//converting number to string
const numberToString=a.map((val:number)=>val.toString());
console.log(numberToString);

//filtering even numbers
const evenNumbers:number[]=a.filter((val:number)=>val%2==0);
console.log(evenNumbers);

//number greater than 2 
const num3:number[]=a.filter((val:number)=>val>3)

//create a function calculateAverage that takes array of numbers as parameter and return average of those numbers

function calculateAverage(arr:number[]){
let avg=arr.reduce((v1,v2)=>v1+v2, 0)/arr.length
return avg;
}
console.log(calculateAverage([1,2,3,4,5,6]));

//objects
const employee_detail:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{City:string; Country:string }
}={
    name:"Shagun",
    age:23,
    isStudent:false,
    address:{
        City:"Jaipur",
        Country:"India"
    }

}
//type aliases
type Person={
    name:string;
    age:number;
    isStudent:boolean;
    address:{City:string; Country:string }
}
const person1:Person={
    name:"Shagun",
    age:23,
    isStudent:false,
    address:{
        City:"Jaipur",
        Country:"India"
    }
}
const person2:Person={
    name:"Komal",
    age:24,
    isStudent:false,
    address:{
        City:"Jaipur",
        Country:"India"
    }
}
//---------Call Signatures
type Student={
    name:string;
    age:number;
    greet:(country:string)=>string
}
const student1:Student={
    name:'shagun',
    age:23,
    greet:((country):string =>`Welcome my name is ${student1.name}, I am from ${country}`)
}
console.log(student1.greet('India'))

//----------------------ENUMS
enum Roles{
    user="user",
    admin="admin"
}
type LoginDetails={
    name?:string;
    email:string;
    password:string;
    role:Roles
}
const usr1:LoginDetails={
    name:"Shagun",
    email:"shagun123@gmail.com",
    password:"abcdefgh",
    role:Roles.admin

}
//------------------------enum 
enum Days{
    mon,tue,wed,thu,fri,sat,sun
}
let whichDay:Days;
whichDay=Days.sat;
console.log(whichDay)

