const buttonEle  = document.querySelector(".click") as HTMLButtonElement;
const body: HTMLElement = document.body;
let isWhite: boolean = false;

buttonEle.addEventListener("click", () =>{
    console.log("clicked me")
    if(isWhite){
        body.style.backgroundColor = "";
    }
    else{
        body.style.backgroundColor = "yellow";
    }

    isWhite = !isWhite;
})