var css  = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body  = document.getElementById("gradient");
var button = document.querySelector("button");


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",randomGradient)

function randomGradient(){
  body.style.background = "linear-gradient(to right, " 
  + randomColor() 
  + "," 
  + randomColor();
  + ")";
  css.textContent = body.style.background + ";";
}

function setGradient(){
//setting gradient value
  body.style.background = "linear-gradient(to right, " 
  + color1.value 
  + "," 
  + color2.value 
  + ")"; 

  //printing the css value in h3
  css.textContent = body.style.background + ";";
}

// picking out random rgb numbers , creating a string rgb(x,y,z) and returning
function randomColor(){
  //pick "red" from 0-255
  var red = Math.floor(Math.random() * 256);
  //pick "green" from 0-255
  var green = Math.floor(Math.random() * 256);
  //pick "blue" from 0-255
  var blue = Math.floor(Math.random() * 256);
  //return the string in the format rgb(255, 255, 255);
  return("rgb(" + red + ", " + green + ", " + blue + ")");

}