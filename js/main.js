//making an array w/ colors to initally set them up.

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(5, 204, 144)",
  "rgb(6, 24, 243)",
]

var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var header = document.querySelector(".header");
//grabing the h1 which displays the rgb color//
var displayColor = document.getElementById("displayColor");

function generateRandomColors(num){
  //make an array, add num random colors to array and then return the array at the end.
  arr = []
    for (var i = 0; i < num; i++) {
      //get random color and push into array.
      arr.push(randomColor())
    }
  return arr;
}

function randomColor(){
  //pick a "red from 0-255,
  //green from 0 -255,
  //blue from 0 -255. Use math.random
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //assembling the string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

var resetButton = document.querySelector("#resetButton")
//reseting the colors, and when win, changes text to play again.
resetButton.addEventListener("click",function(){
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  messageDisplay.textContent = "Which one is it?";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }
  header.style.backgroundColor = ("White");
  this.textContent = "New Colors";
})

// loop through squares, assign colors from colors array to the individual squares.
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  //adding the click event to squares

  squares[i].addEventListener("click",function(){
    //this checks if this (the square we click on, has the css background color property that matches the picked color variable linked to the array)
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);;
      header.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";

    }
    else{
      this.style.backgroundColor = ("#232323");
      messageDisplay.textContent = "Try Again!";
    }
  });
}
//this generates a random number based on the length of the colors array.
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//changing the display H1  to the color from the array.
displayColor.textContent = pickedColor;

//this reassigns the incorect squares to the correct square color when picked.
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}
