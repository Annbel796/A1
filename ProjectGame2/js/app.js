//  Variables
// Buttons
let playersRockBtn = document.getElementById("playersRockBtn");
let playersPaperBtn = document.getElementById("playersPaperBtn");
let playersScissorsBtn = document.getElementById("playersScissorsBtn");
let button0 = document.getElementById("button0");
let aiRockBtn = document.getElementById("aiRockBtn");
let aiPaperBtn = document.getElementById("aiPaperBtn");
let aiScissorsBtn = document.getElementById("aiScissorsBtn");

//Text
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");
let resultText = document.getElementById("result");
let totalScoreText = document.getElementById("totalScoreText");


//Data
let buttons1 = [playersRockBtn, playersPaperBtn, playersScissorsBtn];
let buttons2 = [aiRockBtn, aiPaperBtn, aiScissorsBtn];
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
  showText();
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
  playersRockBtn.style.color = "";
  playersPaperBtn.style.color = "";
  playersScissorsBtn.style.color = "";
}

function selectRandomButtonForAi() {
  let randomIndexAi = Math.floor(Math.random() * buttons2.length);
  let selectedButtonAi = buttons2[randomIndexAi];
  selectedButtonAi.style.color = "blue";
  aiChoice = selectedButtonAi.id.replace("ai", "").toLowerCase();
}

function resetButtonColorsForAi() {
  aiRockBtn.style.color = "";
  aiPaperBtn.style.color = "";
  aiScissorsBtn.style.color = "";
}

function compareResults() {
  if ((playerChoice === "rock" && aiChoice === "scissors") ||
     (playerChoice === "scissors" && aiChoice === "paper") ||
     (playerChoice === "paper" && aiChoice === "rock")){
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
