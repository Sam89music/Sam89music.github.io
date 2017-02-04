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
var pics = ["http://img.kpopmap.com/2015/11/2015-bts-v-legendary-picture-2.jpg",
            "http://68.media.tumblr.com/871f03b589d571aecdf8a571f312cbdf/tumblr_inline_nny1p7apHQ1qze0xk_400.jpg",
            "http://cdn0.dailydot.com/cache/be/da/bedacffded0c1c2e1772f3bf9cac925b.jpg"
           ];
var picIndex = 0;

function goLeft(){
  if(picIndex > 0){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];
  } 
}

function goRight(){
  if(picIndex < (pic.length -1)){
    picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

