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

//get random numbers
function getRandomNum(min, max){
  return Math.floor(Math.random() * max) + min;
}

