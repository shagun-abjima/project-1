//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).
function isInputValiddepartment(input){
    const departmentnames=["Marketing" ,"Human Resource" ,"Engineering"];
    console.log("Validating Department")
    return departmentnames.includes(input);
    }
    
    isInputValiddepartment("Marketing");
    //function without parameter 
    function add(){
        let a=3, b=5;
        let c=a+b;
        return c;
    }
    add();
    console.log(add());
    //function with parameter
    function sub(x,y){
        let c=x-y;
        return c;
    }
    console.log(sub(8,4));
    
    //anagram (function without parameter)
    function anagram(){
    let counter=0;
    let string1 = "ABC";
    let string2 = "BAS"
    const arr1 = Array.from(string1).sort();
    const arr2 = Array.from(string2).sort();
    for(let a=0;a<3;a++){
    
        if(arr1[a]==arr2[a]){
            counter++;
        }
        
        
    }
    if(counter==3){
        console.log("It is an Anagram");
    }
    else{
        console.log("It is not an Anagram");
    }
    }
    anagram();
    
    //anagram (function with parameter)
    function anagramp(str1, str2){
        let counter=0;
        const arr1 = Array.from(str1).sort();
        const arr2 = Array.from(str2).sort();
        for(let a=0;a<3;a++){
        
            if(arr1[a]==arr2[a]){
                counter++;
            }
            
            
        }
        if(counter==3){
            console.log("It is an Anagram");
        }
        else{
            console.log("It is not an Anagram");
        }
        }
        anagramp("ABC","BCA");
    
    //2n Anagram
    function anagramn(str1,str2){
        let counter=0;
        const arr1 = Array.from(str1).sort();
        const arr2 = Array.from(str2).sort();
        for(let a=0;a<3;a++){
        
            if(arr1[a]===arr2[a]){
                counter++;
            }
            
            
        }
        if(counter==2){
            console.log("It is a N-Anagram");
        }
        else{
            console.log("It is not a N-Anagram");
        }
        }
    
        anagramn("ABC","BHG");
    
        //fat-arrow functions
        //Arrow functions allow us to write shorter function syntax
        let myfunct=()=>{
            console.log("hi");
        }
        myfunct();
        //arrow functions with parameters 
        let myfunc=(val)=>{
            console.log("Hi"+" "+val)
        }
        myfunc("Shagun");
        
        //A calculator using fat arrow functions without parameter
        let addition=()=>{
            let a=10,b=5;
            console.log("Addition"+" = "+(a+b));
        }
        let subtraction=()=>{
            let a=10,b=5;
            console.log("Subtraction"+" = "+(a-b));
        }
        let product=()=>{
            let a=10,b=5;
            console.log("Multiplication"+" = "+(a*b));
        }
        let remainder=()=>{
            let a=10,b=5;
            console.log("Remainder"+" = "+(a%b));
        }
        let division=()=>{
            let a=10,b=5;
            console.log("Division"+" = "+(a/b));
        }
        addition();
        subtraction();
        product();
        remainder();
        division();
    //Recursion: calling a function within itself is called recursion.
    function pow(x,y){
    if (n==1){
        return y;
    } 
    else{
        return x* pow(x, n - 1);
    }
    }
    
    //High order functions:A high order function take one or more parameter and return another function as its return value
    function demoFunction(){
    console.log("I am Shagun");
    }
    function highOrderfunction(func){
    console.log("hie");
    func()
    }
    highOrderfunction(demoFunction);
    
    //map 
    const arr=[1,2,3,4,5,6];
    const output=arr.map((num)=>num+=10)
    console.log(output);
    
    //fetching particular data using map method
    const users=[
        {firstName: 'Shagun' , lastName: 'Rathore' ,age: 23},
        {firstName: 'John', lastName: 'Doe', age: 25},
        {firstName: 'Jane', lastName: 'Doe', age: 30},
        {firstName: 'Jack', lastName: 'Doe', age: 35},
        {firstName: 'Jill', lastName: 'Doe', age: 40},
        {firstName: 'Joe', lastName: 'Doe', age: 45},
    ]
    const result=users.map((user)=>user.firstName+" "+user.lastName);
    console.log(result);
    //printing square of numbers using map
    const sq =arr.map((num)=>num*=num)
    console.log(sq);
    //printing double of a number
    const dble = arr.map((val)=>val+=val)
    console.log(dble);
    //filtering an array
    const fl=arr.filter((num)=>num%2)
    console.log(fl);
    
    //filtering users data according to age
    const agefilter = users.filter(({age})=>age>30);
    console.log(agefilter)
    
    