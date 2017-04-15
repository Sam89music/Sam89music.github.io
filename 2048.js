var globalRow1 = 0;
var globalCol2 = 0;
var globalRow2 = 0;
var globalCol2 = 0;
var firstTime = false;

function onLoad(){
  spawnPlace();
  
  while(globalRow1 == globalRow2 && globalCol1 == globalCol2 || globalRow2 === 0 && globalCol2 === 0){
    spawnPlace();
  }
  
  document.getElementById("keyBox").focus();
}

//spawns numbers 2 or 4
function spawnNumber(){
  
  var rand = getRandomNum(1,10);
  
  if(rand <3){
    return 4;
  }
  else{
    return 2;
  }
}

//decides where its placed
function spawnPlace(){
  
  var row = getRandomNum(1,4);
  var col = getRandomNum(1,4);
  
  var spawnNum = spawnNumber();
  var location = 'row' + row + 'col' + col;
  
  document.getElementById(location).innerHTML=spawnNum;
  
  if(firstTime === false){
      globalRow1 = row;
      globalCol1 = col;
      firstTime = true;
    
  }
  else{
      globalRow2 = row;
      globalCol2 = col;
  }
}

//detects button pressed
function buttons(){
  var keycode = event.keyCode; 
  if (keycode == 38){
    //alert ("up");
    moveUp();
    moveUp();
    moveUp();
  }
  if (keycode == 40){
    //alert ("down");
    moveDown();
    moveDown();
    moveDown();
  }
  if (keycode == 39){
    alert ("right");
  }
  if (keycode == 37){
    alert ("left");
  }
}

function moveUp(){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 1; j < 4; j++){
      for(var i = 1; i <= 4; i++){
        var element = document.getElementById("row" + j + "col" + i).innerHTML;

      if(element === ""){
          var elementBelow = document.getElementById("row" + (j + 1) + "col" + i).innerHTML;
          document.getElementById("row" + j + "col" + i).innerHTML = elementBelow;
          document.getElementById("row" + (j +1) + "col" + i).innerHTML = "";
        }
        else{
          canMove = false;
        }
      }
    }
  }
}

function moveDown(){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 4; j > 1; j--){
      for(var i = 4; i >= 1; i--){
        var element = document.getElementById("row" + j + "col" + i).innerHTML;

      if(element === ""){
          var elementBelow = document.getElementById("row" + (j - 1) + "col" + i).innerHTML;
          document.getElementById("row" + j + "col" + i).innerHTML = elementBelow;
          document.getElementById("row" + (j - 1) + "col" + i).innerHTML = "";
        }
        else{
          canMove = false;
        }
      }
    }
  }
}

//get random numbers
function getRandomNum(min, max){
  return Math.floor(Math.random() * max) + min;
}

