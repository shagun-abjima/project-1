
function displayred(){
    document.getElementById('first').classList.toggle("red-dark")
}
document.getElementById('second-button').addEventListener("click" , displayorange)
function displayorange(){
    document.getElementById('second').classList.toggle("yellow-dark")
}
document.getElementById('third-button').addEventListener("click",displaygreen)
function displaygreen(){
    document.getElementById('third').classList.toggle("green-dark")
}