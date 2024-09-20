//  Variables
// Buttons
let playersRock = document.getElementById("playersRock");
let playersPaper = document.getElementById("playersPaper");
let playersScissors = document.getElementById("playersScissors");
let button0 = document.getElementById("button0");
let aiRock = document.getElementById("aiRock");
let aiPaper = document.getElementById("aiPaper");
let aiScissors = document.getElementById("aiScissors");

//Text
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");
let resultText = document.getElementById("result");
let totalScoreText = document.getElementById("totalScoreText");


//Data
let buttons1 = [playersRock, playersPaper, playersScissors];
let buttons2 = [aiRock, aiPaper, aiScissors];
let playerChoice = "";
let aiChoice = "";
let playerScore = 0;
let aiScore = 0;
let drawScore = 0;

//Process
button0.addEventListener("click", function () {
  resetButtonColorsForPlayer();
  resetButtonColorsForAi();
  selectRandomButtonForPlayer();
  selectRandomButtonForAi();
  compareResults();
  showAllResult()

});

// Controllers
function selectRandomButtonForPlayer() {
  let randomIndexPlayer = Math.floor(Math.random() * buttons1.length);
  let selectedButtonPlayer = buttons1[randomIndexPlayer];
  selectedButtonPlayer.style.color = "blue";
  playerChoice = selectedButtonPlayer.id.replace("players", "").toLowerCase();
}

function resetButtonColorsForPlayer() {
  playersRock.style.color = "";
  playersPaper.style.color = "";
  playersScissors.style.color = "";
}

function selectRandomButtonForAi() {
  let randomIndexAi = Math.floor(Math.random() * buttons2.length);
  let selectedButtonAi = buttons2[randomIndexAi];
  selectedButtonAi.style.color = "blue";
  aiChoice = selectedButtonAi.id.replace("ai", "").toLowerCase();
}

function resetButtonColorsForAi() {
  aiRock.style.color = "";
  aiPaper.style.color = "";
  aiScissors.style.color = "";
}

function compareResults() {
  if ((playerChoice === "rock" && aiChoice === "scissors") ||
     (playerChoice === "scissors" && aiChoice === "paper") ||
     (playerChoice === "paper" && aiChoice === "rock")) {
    playerScore++;
    showText("Player wins this round!");
  } else if (playerChoice === aiChoice){
    drawScore++;
    showText("Draw ");
  } else {
  aiScore++;
  showText("AI wins this round!");
  }
}

//View
function showText(result) {
  resultText.innerHTML = result;
}

function showAllResult(){
  totalScoreText.innerHTML = "Total score: Player - " + playerScore + "; AI - " + aiScore + "; Draw - " + drawScore;
}

textField0.style.color = "blue";
button0.style.color = "blue";
