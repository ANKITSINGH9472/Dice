var rand1 = Math.floor(Math.random()*6)+1;
var randImage1= "dice" + rand1 + ".png";
var randomImageSource1 = "images/" + randImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);


var rand2=Math.floor(Math.random()*6)+1;
var randomImageSource2 ="images/dice" + rand2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(rand1>rand2)
{
  document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else if(rand2>rand1)
{
  document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
else
  document.querySelector("h1").innerHTML="Draw!";
