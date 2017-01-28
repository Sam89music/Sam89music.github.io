
var operand1;
var operand2;

function getNumber(){
  //test
  alert("test");
  operand1=Math.floor(Math.random()*20)+1;
  operand2=Math.floor(Math.random()*20)+1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("results").innerHTML="";
}