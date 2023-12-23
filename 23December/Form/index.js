const form=document.getElementById('form');
const username=document.getElementById('userName');
const email=document.getElementById('email');
const password= document.getElementById('password');
const cpassword= document.getElementById('cpassword');
//Error message
function errorMsg(input,msg){
const formControl=input.parentElement;
formControl.className="form-control error";
const small=formControl.querySelector("small");
small.innerHTML=msg;
}
//Success message
function  successMsg(input){
const formControl=input.parentElement;
formControl.className="form-control success";
}
//email validation 
function emailValidate(input){
    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}

function upperCaseletter(input){
return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
//function to validate all feilds 
function validateAll(inputArr){
inputArr.forEach(function(input){
    if(input.value.trim()===""){
        errorMsg(input,`${input.id} is required`)
    }
    else{
        successMsg(input);
    }
});
}



form.addEventListener("submit", function (e) {
e.preventDefault();
//function to validate all feilds
validateAll([username,email,password,cpassword]);

});