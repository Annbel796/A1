//  Variables
  // Buttons
let button0 = document.getElementById("button0");

  //Text
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("result");

  //Data
let playerRoll = 0;
let aiRoll = 0;


//Process
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  compareRolls();
});

// Controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAi(){
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

function compareRolls() {
  if (playerRoll > aiRoll) {
    showText("Winner Player");
  } else if (playerRoll < aiRoll) {
    showText("Winner AI");
  } else {
    showText("Draw");
  }
}

//View
function showPlayerRollResult(){
  playerRollText.innerHTML = "Player: " + playerRoll;
}

function showAiRollResult(){
 aiRollText.innerHTML = "AI: " + aiRoll;
}

function showText(result) {
  resultText.innerHTML = result;
}


