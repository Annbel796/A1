// Variables
// Buttons
let PlayersButton1 = document.getElementById("PlayersButton1");
let PlayersButton2 = document.getElementById("PlayersButton2");
let PlayersButton3 = document.getElementById("PlayersButton3");
let button0 = document.getElementById("button0");
let aiButton1 = document.getElementById("aiButton1");
let aiButton2 = document.getElementById("aiButton2");
let aiButton3 = document.getElementById("aiButton3");

//Text
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("result");
let totalScoreText = document.getElementById("totalScoreText");

//Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let drawScore = 0;


//Process
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  compareRolls();
  showAllResult();
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
    playerScore++;
    showText("Player wins this round!");
  } else if (playerRoll < aiRoll) {
    aiScore++;
    showText("AI wins this round!");
  } else {
    drawScore++;
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

function showAllResult(){
  totalScoreText.innerHTML = "Total score: Player - " + playerScore + "; AI - " + aiScore + "; Draw - " + drawScore;
}

textField0.style.color = "blue";
button0.style.color = "blue";
