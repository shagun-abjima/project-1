/*without async await 
function a(){
    fetch('https://randomuser.me/api/')
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data)
    })
}

a();*/
//using async await 
async function b(){
   let raw = await fetch('https://randomuser.me/api/')
   let ans = await raw.json();
   console.log(ans);
}

b();