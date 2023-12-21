//String stores a series of characters.String indexes are zero based.(starts with 0).
//Normally, strings like "John Doe", cannot have methods or properties because they are not objects.
//But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.
//Declaration of a string
let firstName ="Shagun";
let lastName ="Rathore";
console.log("hi");
console.log(firstName);
//The at() method returns an indexed character from a string. CharAt() also works same.
let letter=firstName.charAt(0);
console.log(letter);
//charCodeAt() returns the Unicode of the character at a specified position in a string.
let uc=firstName.charCodeAt(0);
console.log(uc);
//The codePointAt() method returns the Unicode value at an index (position) in a string
//charCodeAt() is UTF-16, codePointAt() is Unicode.
//Concat is used to merge two strings 
let fullName= firstName.concat(" ",lastName);
console.log(fullName);
//The endsWith() method returns true if a string ends with a specified string.
//Otherwise it returns false.The endsWith() method is case sensitive.
let check= fullName.endsWith("Rathore");
console.log(check)
//The String.fromCharCode() method converts Unicode values to characters.
//The includes() method returns true if a string contains a specified string.
let text1="hello everyone this is me."
let inc=text1.includes("this",10);
console.log(inc);
//indexOf() returns the position of the first occurrence of a value in a string.
//The length property returns the length of a string.The length property of an empty string is 0.
let len = text1.length;
console.log(len);
//localeCompare() returns one of 3 numbers indicating the sort order.
//-1 if sorted before
//1 if sorted after
//0 if equal
let a = "abcd";
let b = "efgh";

