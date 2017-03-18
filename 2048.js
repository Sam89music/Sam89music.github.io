
function onLoad(){
  spawnPlace();
  spawnPlace();
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
}

//get random numbers
function getRandomNum(min, max){
  return Math.floor(Math.random() * max) + min;
}

