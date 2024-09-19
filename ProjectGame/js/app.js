// Documents Elements
// Looks "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

//  Variables

// Buttons
let button0 = document.getElementById("button0");

//Text
let playerRollText = document.getElementById("PlayerRollText");

//Data
let playerRoll = 0;


//Process
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();

});

// Controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll = Math.floor(Math.random() * 6) + 1;
  console.log (playerRoll)

}

//View
function showPlayerRollResult(){
  playerRollText.innerHTML = playerRoll;
}




