//Color Buttons
function changeColorToRed(){
  document.getElementById("content").style.color = "red";
}
function changeColorToOrange(){
  document.getElementById("content").style.color = "orange";
}
function changeColorToYellow(){
  document.getElementById("content").style.color = "yellow";
}
function changeColorToGreen(){
  document.getElementById("content").style.color = "green";
}
function changeColorToLime(){
  document.getElementById("content").style.color = "lime";
}
function changeColorToBlue(){
  document.getElementById("content").style.color = "blue";
}
function changeColorToPurple(){
  document.getElementById("content").style.color = "purple";
}

//Flashcard Addition Game
var operand1;
var operand2;

function getNumbers(){
  operand1=Math.floor(Math.random()*20)+1;
  operand2=Math.floor(Math.random()*20)+1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("results").innerHTML="";
}

function checkAnswer(){
  var userSum = document.getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  
  if(userSum == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Incorrect!";
  }
}

//Gallery

