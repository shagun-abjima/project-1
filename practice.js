//LOOPS


//----------------------------Right triangle pattern
/*let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/
//------------------------------left triangle pattern
/*let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/
//-----------------------downward star pattern left
/*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
 */
//----------------------------------pyramid pattern
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
 */
//----------------------------------reverse pyramid
/*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
//-------------------------------------hourglass pattern
/*let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 2; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/



//ARRAY
/*
let arr=["One","Two","Three"];
//To delete element at index1
delete arr[1];
console.log(arr.length);
//To add elements to an array 
arr.push("Two","Four","Five")
console.log(arr.length)
arr.splice(1, 1); //from index 1 remove 1 element
alert( arr.concat([3, 4]) );//will join 3 and 4 to array

//PALINDROME
function palindrome() {  
    var a, b, no, temp = 0;  
    no =343;  
    b = no;  
    while (no > 0)  
    {  
    a = no % 10;  
    no = parseInt( no / 10);  
    temptemp = temp*10 + a;  
    }  
    if (temp == b)  
    {  
    alert( "It is a Palindrome Number");  
    }  
    else  
    {  
    alert ("it is not a Palindrome Number");  
    } 
}  




*/

