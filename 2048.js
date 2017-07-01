var globalRow1 = 0;
var globalCol2 = 0;
var globalRow2 = 0;
var globalCol2 = 0;
var firstTime = false;
var pressedKey = 0;

document.onkeydown = function (e) {
  pressedKey = e.keyCode;
  
  buttons(pressedKey);
  
  colors();
}

function onLoad(){
  spawnPlace();
  
  while(globalRow1 == globalRow2 && globalCol1 == globalCol2 || globalRow2 === 0 && globalCol2 === 0){
    spawnPlace();
  }
  
  //document.getElementById("keyBox").focus();
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
  //spawns it the second time
  else{
      globalRow2 = row;
      globalCol2 = col;
  }
}

//get random numbers
function getRandomNum(min, max){
  return Math.floor(Math.random() * max) + min;
}

//detects button pressed
function buttons(keycode){
//  var keycode = event.keyCode; 
  if (keycode == 38){
    //alert ("up");
    moveUp();
    moveUp();
    moveUp();
    spawnNumberAfterTurn();
  }
  if (keycode == 40){
    //alert ("down");
    moveDown();
    moveDown();
    moveDown();
    spawnNumberAfterTurn();
  }
  if (keycode == 39){
    //alert ("right");
    moveRight();
    moveRight();
    moveRight();
    spawnNumberAfterTurn();
  }
  if (keycode == 37){
    //alert ("left");
    moveLeft();
    moveLeft();
    moveLeft();
    spawnNumberAfterTurn();
  }
}

function moveUp(){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 1; j < 4; j++){
      for(var i = 1; i <= 4; i++){
        
        //element of focus
        var element = document.getElementById("row" + j + "col" + i).innerHTML;
        var elementBelow = document.getElementById("row" + (j + 1) + "col" + i).innerHTML;
        
      //if there is nothing inside element, move the one below up
      if(element === ""){
          
          document.getElementById("row" + j + "col" + i).innerHTML = elementBelow;
          document.getElementById("row" + (j + 1) + "col" + i).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + j + "col" + i).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + (j + 1) + "col" + i).innerHTML="";
            
          }
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
        var elementBelow = document.getElementById("row" + (j - 1) + "col" + i).innerHTML;

      if(element === ""){
          
          document.getElementById("row" + j + "col" + i).innerHTML = elementBelow;
          document.getElementById("row" + (j - 1) + "col" + i).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + j + "col" + i).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + (j - 1) + "col" + i).innerHTML="";
            
          }  
        }
      }
    }
  }
}

function moveLeft(){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 1; j < 4; j++){
      for(var i = 1; i <= 4; i++){
        var element = document.getElementById("row" + i + "col" + j).innerHTML;
        var elementBelow = document.getElementById("row" + i + "col" + (j + 1)).innerHTML;

      if(element === ""){
          
          document.getElementById("row" + i + "col" + j).innerHTML = elementBelow;
          document.getElementById("row" + i + "col" + (j + 1)).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + i + "col" + j).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + i + "col" + (j + 1)).innerHTML="";
          }
        }
      }
    }
  }
}

function moveRight(){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 4; j > 1; j--){
      for(var i = 4; i >= 1; i--){
        var element = document.getElementById("row" + i + "col" + j).innerHTML;
        var elementBelow = document.getElementById("row" + i + "col" + (j - 1)).innerHTML;

      if(element === ""){
          
          document.getElementById("row" + i + "col" + j).innerHTML = elementBelow;
          document.getElementById("row" + i + "col" + (j - 1)).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + i + "col" + j).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + i + "col" + (j - 1)).innerHTML="";
            
          }
        }
      }
    }
  }
}

function spawnNumberAfterTurn(){
  
  var row = getRandomNum(1,4);
  var col = getRandomNum(1,4);
  
  var location = "row" + row + "col" + col;
  
  var element = document.getElementById("row" + row + "col" + col).innerHTML;
  
  if(element === ""){
    
      var spawnNum = spawnNumber();
      document.getElementById(location).innerHTML=spawnNum;
    }
    else{
      
      spawnNumberAfterTurn();
    }
}

function colors(){
  
  var sum = 0;
  var box = "";
  var numS = "";
  for(var j = 1; j <= 4; j++){
    for(var i = 1; i <= 4; i++){
        box = "row" + j + "col" + i;
        numS = document.getElementById(box).innerHTML;
      
           if(numS !== ""){
            sum = parseInt(numS);
            if(sum === 2){
               document.getElementById(box).style.backgroundColor="#ffffff";
            }
            if(sum === 4){
               document.getElementById(box).style.backgroundColor="#ffffcc";
            }
            if(sum === 8){
               document.getElementById(box).style.backgroundColor="#ffc14d";
            }
            if(sum === 16){
               document.getElementById(box).style.backgroundColor="#ff6600";
            }
            if(sum === 32){
               document.getElementById(box).style.backgroundColor="#ff5c33";
            }
            if(sum === 64){
               document.getElementById(box).style.backgroundColor="red";
            }
            if(sum === 128){
               document.getElementById(box).style.backgroundColor="gold";
            }
            if(sum === 256){
               document.getElementById(box).style.backgroundColor="#ffff66"
            }
            if(sum === 512){
               document.getElementById(box).style.backgroundColor="yellow"
            }
            if(sum === 1024){
               document.getElementById(box).style.backgroundColor="#ffcc1a"
            }
            if(sum === 2048){
               document.getElementById(box).style.backgroundColor="#ff9933"
            }
         }
         else{
           //#d2f9f5
           document.getElementById(box).style.backgroundColor="#d2f2f5";
           document.getElementById(box).style.color="black";
         }
        
         document.getElementById(box).style.borderColor="black";
      }
   }
}




