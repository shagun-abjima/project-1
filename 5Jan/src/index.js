"use strict";
const buttonEle = document.querySelector(".click");
const body = document.body;
let isWhite = false;
buttonEle.addEventListener("click", () => {
    console.log("clicked me");
    if (isWhite) {
        body.style.backgroundColor = "";
    }
    else {
        body.style.backgroundColor = "purple";
    }
    isWhite = !isWhite;
});
