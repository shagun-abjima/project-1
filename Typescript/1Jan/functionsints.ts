function addTwo(num: number){
    return num+2;
}
addTwo(2);
//----------------
function getUpper(val: string){
return val.toUpperCase();
}
//----------------
function signUpUser(name: string, email: string , isPaid: boolean){
    console.log("hello"+name);

}
signUpUser("Hitesh","Hitesh123@gmail.com",true);
//----------------
let loginUser=(name:string,email:string,isPaid: boolean=false)=>{//default value of isPaid is false
    console.log(name+ email+ isPaid)
}
loginUser("Ritesh", "Ritesh123@gmail.com")
//---------------
const heroes = ["thor","spiderman","ironman","hulk"]
heroes.map((hero):string =>{
    console.log(`Hero is ${hero}`)
    return hero;
})
//-----------------
function consoleError(errmsg : string):void{
    console.log(errmsg)
}
//----------------
//functions which never returns a value
function handleError(errmsg : string):never{
    throw new Error(errmsg);
}

//Arrays
const name:string[]=[];
name.push("hi");

//Readonly prevent array from being changed
const names:readonly string[]=[];

//type inference
const numb =[1,2,3];
numb.push(4);//noerror
//numb.push("5");//error

//-----------------
export{}