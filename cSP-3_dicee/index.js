var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var randomNumber2 = 1 + Math.floor(Math.random() * 6);

var rand1 = "./images/dice" + randomNumber1 + ".png";
var rand2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src" , rand1);
document.querySelector(".img2").setAttribute("src" , rand2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="draw!";
}

else if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 wins!";   
}

else {
    document.querySelector("h1").innerHTML="player 2 wins🚩!";   
}