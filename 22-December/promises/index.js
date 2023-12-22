//using promises
var ans= new Promise((res,rej)=>{
    if(true)
     {
     return res("this is response statement");
     }
     else
     {
     return rej();
     }
  })
  
  
  ans 
     .then(function(){
         console.log("resolve");
         })
     .catch(function(){
         console.log("reject");
         })  

//using nested promises
var ans = new Promise(function(res,rej){
    return res("this is first reponse");
    })
    
var p2 = ans.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
    return res("this is second response")
    
    
    })
    
})
p2.then(function(data){
    console.log(data)
})

//use of setTimeout:print4 is printed after printing other statements 
//when the data of side stack will go to main stack when main stack will be empty.

console.log("print1");
console.log("print2");
console.log("print3");
setTimeout(()=>console.log("print4"),2000)
console.log("print5");
console.log("print6");
console.log("print7");