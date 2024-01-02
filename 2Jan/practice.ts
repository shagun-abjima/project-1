//A program to add two numbers
//function define
function sum(a: number,b:number):number{
    return a+b
}
//function call 
console.log(sum(1,10));
//with fat arrow function
const add=(a: number,b:number):number =>{
    return a+b
}
console.log(add(1,10));
//-------------
let n:Number=NaN;
console.log(n);
//Initializing a string 
let message: string = "Hello Typescript";
//Concatination
let myFirstName: string = "Shagun";
let myLastName: string = "Rathore";
let myFullName: string = myFirstName+myLastName;
console.log(myFullName);
//length
let sentance:string ="hello everyone hope you all are doing well"
let scount:number = sentance.length;
console.log(scount);
//Uppercase and lowercase
let text:string="Hello";
let capitaltext:string= text.toUpperCase();
let smalltext:string= text.toLowerCase();
console.log(capitaltext);
console.log(smalltext);
//extract 10 letters from sentance
let ext:string = sentance.substring(0,10);
console.log(ext);
//string comparision
let str1:string="hello everyone";
let str2:string="hi all ";
let result:boolean;
(str1===str2)?result=true:result=false;
console.log(result);
//string template 
let product:string="Table";
let price:string="1000";
let st=`${product} is priced at ${price} Dollars`
console.log(st);
//even number
function isEven(a: number):boolean {
    return a%2===0
}
console.log(isEven(4));
//divisibility
function isDivisibleBy4And8(a: number): boolean{
let result =(a%4==0 && a%8==0)?true:false;
return result;
}
console.log(isDivisibleBy4And8(24));

//--------------


//wap make a function isEven that takes a number as a parameter and returns true is it is even number and false otherwise
 
const isEvenNum = (number: number) => {
 
    if(number % 2 == 0){
       
        return true;
 
    }
    else {
        return false;
    }
 
}
console.log(isEvenNum(2));

 
 
 
//wap make a function isDivisibleBy4and8 that takes a number as a parameter and returns true if the number is divisible by 4 and 8
 
const idDivisibleBy4and8 = (num: number) =>{
 
    if(num % 4 == 0 && num % 8 == 0){
        return true;
    }
    else{
        return false;
    }
 
}
 
console.log(idDivisibleBy4and8(20));
 
 
// BIGINT DATATYPE
//let maxNumber = Number.MAX_SAFE_INTEGER;  2 ^ 54 numbers greater bigInt
//let maxNumber = (Number as any).Max_SAFE_INTEGER;
let bigNumber:bigint = 9007199254740991n
console.log(bigNumber);
let anotherBigNumber: bigint = BigInt("90071992547409925")
console.log(anotherBigNumber);
//addition
let sum2 = bigNumber + anotherBigNumber;
console.log(sum2);
 
//subtraction
let sub = bigNumber - anotherBigNumber;
console.log(sub);
 
//multiplication
let mul = bigNumber * anotherBigNumber;
console.log(mul);
 
//division
let div = bigNumber / anotherBigNumber;
console.log(div);
 
//palindrome
const isPalindrome = (palin:string): boolean => {
    let myPalindrome = palin.split("").reverse().join("");
    return myPalindrome ===palin   

}
console.log(isPalindrome("13131"));
