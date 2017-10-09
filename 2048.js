var globalRow1 = 0;
var globalCol2 = 0;
var globalRow2 = 0;
var globalCol2 = 0;
var firstTime = false;
var pressedKey = 0;
var moveCount = 0;
var winFlag = false;
var before = [
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""]
            ];
var after = [
                ["","","",""],
                ["","","",""],
                ["","","",""],
                ["","","",""]
            ];

//checks if every element is filled with a number
function checkFull(){
  for(var j = 0; j < 4; j++){
      for(var i = 0; i < 4; i++){
      }
   }
}

//gets the value of every box on the board
function updateBoardState(boardState){
  for(var j = 0; j < 4; j++){
      for(var i = 0; i < 4; i++){
         if(boardState === "before"){
            before[i][j] = document.getElementById("row" + (i + 1) + "col" + (j + 1)).innerHTML;
            }
         else{
            after[i][j] = document.getElementById("row" + (i + 1) + "col" + (j + 1)).innerHTML;
            }
         //console.log(before[i][j]);
      }
    }
  if(boardState == "before"){
    printBeforeBoard();
  }
  else{
    printAfterBoard();
  }
}
function equalStates(){
    for(j = 0; j < 4; j++){
      for(i = 0; i < 4; i++){
        if(before[i][j] !== after[i][j]){  
    return false;
      }
    }
  }
  return true;
}

function printAfterBoard(){
   var board = "after:";
   for(j = 0; j < 4; j++){
    for(i = 0; i < 4; i++){
      board = board + after[i][j] + "";
    }
    board = board + "\n";
   }
   console.log(board);
}

function printBeforeBoard(){
  var board = "before:";
  var i, j;
  for(j = 0; j < 4; j++){
    for(i = 0; i < 4; i++){
      board = board + before[i][j] + "";
    }
    board = board + "\n";
  }
  console.log(board);
  
}

//handles every pressed key
document.onkeydown = function (e) {
  pressedKey = e.keyCode;
  
  moveCount++;
  
  console.log("Move: " + moveCount);
  
  updateBoardState("before");
  
  buttons(pressedKey);
  
  colors();
  
  updateBoardState("after");
  
  if(!equalStates()){
    spawnNumberAfterTurn();
    console.log("Boards do not equal")
  }
  
  colors();
  
}

function onLoad(){
  spawnPlace();
  
  while(globalRow1 == globalRow2 && globalCol1 == globalCol2 || globalRow2 === 0 && globalCol2 === 0){
    spawnPlace();
  }
  colors();
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

function spawnNumberAfterTurn(){
  
  var row = getRandomNum(1,4);
  var col = getRandomNum(1,4);
  
  var location = "row" + row + "col" + col;
  
  var element = document.getElementById("row" + row + "col" + col).innerHTML;
  
  if(element === ""){
    
      var spawnNum = spawnNumber();
      document.getElementById(location).innerHTML=spawnNum;
      //board[row][col] = "" + spawnNum;
    }
    else{
      
      spawnNumberAfterTurn();
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
    moveUp(1);
    moveUp(2);
    moveUp(3);
    //spawnNumberAfterTurn();
  }
  if (keycode == 40){
    //alert ("down");
    moveDown(1);
    moveDown(2);
    moveDown(3);
    //spawnNumberAfterTurn();
  }
  if (keycode == 39){
    //alert ("right");
    moveRight(1);
    moveRight(2);
    moveRight(3);
    //spawnNumberAfterTurn();
  }
  if (keycode == 37){
    //alert ("left");
    moveLeft(1);
    moveLeft(2);
    moveLeft(3);
    //spawnNumberAfterTurn();
  }
  /*
  if(!equalStates()){
    spawnNumberAfterTurn();
    console.log("Boards do not equal")
  }
  */
}

function moveUp(turn){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 1; j < 4; j++){
      for(var i = 1; i <= 4; i++){
        
        //element of focus
        var element = document.getElementById("row" + j + "col" + i).innerHTML;
        var elementBelow = document.getElementById("row" + (j + 1) + "col" + i).innerHTML;
        var oElement1 = "";
        var oElement2 = "";
        
        if(j < 2){
          // othe elements to consider
          oElement1 = document.getElementById("row" + (j + 2) + "col" + i).innerHTML;
          oElement2 = document.getElementById("row" + (j + 3) + "col" + i).innerHTML;
        }
        
      //if there is nothing inside element, move the one below up
      if(element === ""){
          
          document.getElementById("row" + j + "col" + i).innerHTML = elementBelow;
          document.getElementById("row" + (j + 1) + "col" + i).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          //and if its the first turn,
          if(element === elementBelow && turn === 3){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + j + "col" + i).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + (j + 1) + "col" + i).innerHTML="";
            
            if(oElement1 === oElement2 && oElement1 !== ""){
              sum = parseInt(oElement1) + parseInt(oElement2);
              document.getElementById("row" + (j + 1) + "col" + i).innerHTML = sum;
              document.getElementById("row" + (j + 2) + "col" + i).innerHTML = "";
              document.getElementById("row" + (j + 3) + "col" + i).innerHTML = "";
            }
          }
        }
      }
    }
  }
}

function moveDown(turn){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 4; j > 1; j--){
      for(var i = 4; i >= 1; i--){
        var element = document.getElementById("row" + j + "col" + i).innerHTML;
        var elementBelow = document.getElementById("row" + (j - 1) + "col" + i).innerHTML;
        var oElement1 = "";
        var oElement2 = "";
        
        if(j > 3){
          // othe elements to consider
          oElement1 = document.getElementById("row" + (j - 2) + "col" + i).innerHTML;
          oElement2 = document.getElementById("row" + (j - 3) + "col" + i).innerHTML;
        }
        
      if(element === ""){
          
          document.getElementById("row" + j + "col" + i).innerHTML = elementBelow;
          document.getElementById("row" + (j - 1) + "col" + i).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow && turn === 3){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + j + "col" + i).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + (j - 1) + "col" + i).innerHTML="";
            
            if(oElement1 === oElement2 && oElement1 !== ""){
              sum = parseInt(oElement1) + parseInt(oElement2);
              document.getElementById("row" + (j - 1) + "col" + i).innerHTML = sum;
              document.getElementById("row" + (j - 2) + "col" + i).innerHTML = "";
              document.getElementById("row" + (j - 3) + "col" + i).innerHTML = "";
            }
          }  
        }
      }
    }
  }
}

function moveLeft(turn){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 1; j < 4; j++){
      for(var i = 1; i <= 4; i++){
        var element = document.getElementById("row" + i + "col" + j).innerHTML;
        var elementBelow = document.getElementById("row" + i + "col" + (j + 1)).innerHTML;
        var oElement1 = "";
        var oElement2 = "";
        
        if(j < 2){
          // othe elements to consider
          oElement1 = document.getElementById("row" + i + "col" + (j + 2)).innerHTML;
          oElement2 = document.getElementById("row" + i + "col" + (j + 3)).innerHTML;
        } 
        
      if(element === ""){ 
          
          document.getElementById("row" + i + "col" + j).innerHTML = elementBelow;
          document.getElementById("row" + i + "col" + (j + 1)).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow && turn === 3){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + i + "col" + j).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + i + "col" + (j + 1)).innerHTML="";
            
            if(oElement1 === oElement2 && oElement1 !== ""){
              sum = parseInt(oElement1) + parseInt(oElement2);
              document.getElementById("row" + i + "col" + (j + 1)).innerHTML = sum;
              document.getElementById("row" + i + "col" + (j + 2)).innerHTML = "";
              document.getElementById("row" + i + "col" + (j + 3)).innerHTML = "";
            }
          }
        }
      }
    }
  }
}

function moveRight(turn){
  
  var canMove = true;
  
  while(canMove){
    for(var j = 4; j > 1; j--){
      for(var i = 4; i >= 1; i--){
        var element = document.getElementById("row" + i + "col" + j).innerHTML;
        var elementBelow = document.getElementById("row" + i + "col" + (j - 1)).innerHTML;
        var oElement1 = "";
        var oElement2 = "";
        
        if(j > 3){
          // othe elements to consider
          oElement1 = document.getElementById("row" + i + "col" + (j - 2)).innerHTML;
          oElement2 = document.getElementById("row" + i + "col" + (j - 3)).innerHTML;
        }
      if(element === ""){
          
          document.getElementById("row" + i + "col" + j).innerHTML = elementBelow;
          document.getElementById("row" + i + "col" + (j - 1)).innerHTML = "";
        }
        else{
          canMove = false;
          
          //if the numbers are the same then add them
          if(element === elementBelow && turn === 3){
            //add elements because they match
            var sum = parseInt(element) + parseInt(elementBelow);
            //put sum into the element above
            document.getElementById("row" + i + "col" + j).innerHTML=sum;
            //change element below with empty string
            document.getElementById("row" + i + "col" + (j - 1)).innerHTML="";
            
            if(oElement1 === oElement2 && oElement1 !== ""){
              sum = parseInt(oElement1) + parseInt(oElement2);
              document.getElementById("row" + i + "col" + (j - 1)).innerHTML = sum;
              document.getElementById("row" + i + "col" + (j - 2)).innerHTML = "";
              document.getElementById("row" + i + "col" + (j - 3)).innerHTML = "";
            }
          }
        }
      }
    }
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
               document.getElementById(box).style.backgroundColor="#eee4da";
               document.getElementById(box).style.fontSize="55px";
            }
            if(sum === 4){
               document.getElementById(box).style.backgroundColor="#ede0c8";
               document.getElementById(box).style.fontSize="55px";
            }
            if(sum === 8){
               document.getElementById(box).style.backgroundColor="#f2b179";
               document.getElementById(box).style.fontSize="55px";
            }
            if(sum === 16){
               document.getElementById(box).style.backgroundColor="#f59563";
               document.getElementById(box).style.fontSize="55px";
            }
            if(sum === 32){
               document.getElementById(box).style.backgroundColor="#f67c5f";
               document.getElementById(box).style.fontSize="55px";
            }
            if(sum === 64){
               document.getElementById(box).style.backgroundColor="#f65e3b";
               document.getElementById(box).style.fontSize="55px";
            }
            if(sum === 128){
               document.getElementById(box).style.backgroundColor="#edcf72";
               document.getElementById(box).style.boxShadow="0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286)";
               document.getElementById(box).style.fontSize="45px";
            }
            if(sum === 256){
               document.getElementById(box).style.backgroundColor="#edcc61"
               document.getElementById(box).style.boxShadow="0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048)";
               document.getElementById(box).style.fontSize="45px";
            }
            if(sum === 512){
               document.getElementById(box).style.backgroundColor="#edc850";
               document.getElementById(box).style.boxShadow="0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381)";
               document.getElementById(box).style.fontSize="45px";
            }
            if(sum === 1024){
               document.getElementById(box).style.backgroundColor="#edc53f";
               document.getElementById(box).style.boxShadow="0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571)";
               document.getElementById(box).style.fontSize="35px";
            }
            if(sum === 2048){
               document.getElementById(box).style.backgroundColor="#edc22e";
               document.getElementById(box).style.boxShadow="0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333)";
               document.getElementById(box).style.fontSize="35px";
               if(winFlag === false){
                 win();
                 winFlag = true;
               }
            }
         }
         else{
           //#d2f9f5
           document.getElementById(box).style.backgroundColor="#d2f2f5";
           document.getElementById(box).style.color="black";
           document.getElementById(box).style.boxShadow="0";
         }
        
         document.getElementById(box).style.borderColor="black";
      }
   }
}

function win(){
  alert("Congratulation, You reached 2048!");
}


