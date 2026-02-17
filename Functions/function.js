function greet(){
  console.log("Hello");
}
greet();

function showMessage(){
  console.log("This is a Message!");
}
showMessage();

function loginfo(){
  console.log("Logging Information");
}
loginfo();

function startGame(){
  console.log("Game Started");
  endGame();
}
function endGame(){
  console.log("Game over!")
}
startGame();

function beginTask(){
  console.log("Task Stated");
  finishTask();
}
function finishTask(){
  console.log("Task Finished");
}
beginTask();
