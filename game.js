var randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);
var submitButton = document.getElementById("submit");
var live=document.getElementById("lives");
var message = document.getElementById("message");
let msg;
let s=10;

submitButton.onclick = () => {

    s--;
    let r=s;
    console.log();
    let inputNumber= document.getElementById("number-input").value;
    if(inputNumber == randomNumber)
    {
            location.href="./win.html";

    }
    else if(inputNumber>randomNumber)
    {
         msg= "Oops! Your guess is high!"

    }
    else if(inputNumber<randomNumber)
    {
        msg= "Oops! Your guess is low!"

    }
    if(s==0)
    {
        submitButton.onclick=() => {
            location.href="./loss.html";
        }

    }


    live.innerHTML = s, "lives"
    message.style.display="inherit";
    message.innerHTML = msg;

}