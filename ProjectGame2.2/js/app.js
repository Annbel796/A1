//  Variables
// Buttons
let playersRock = document.getElementById("playersRock");
let playersPaper = document.getElementById("playersPaper");
let playersScissors = document.getElementById("playersScissors");
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
playersRock.addEventListener("click", function () {
  selectButtonForPlayer(playersRock);
  selectRandomButtonForAi();
  compareResults();
  showAllResult()

});
playersPaper.addEventListener("click", function () {
  selectButtonForPlayer(playersPaper);
  selectRandomButtonForAi();
  compareResults();
  showAllResult()

});
playersScissors.addEventListener("click", function () {
  selectButtonForPlayer(playersScissors);
  selectRandomButtonForAi();
  compareResults();
  showAllResult()
});

// Controllers
function selectButtonForPlayer(selectedButton) {
  resetButtonColorsForPlayer();
  selectedButton.classList.add('selected');
  selectedButton.style.color = "blue";
  playerChoice = selectedButton.id.replace("players", "").toLowerCase();
}

function selectRandomButtonForAi() {
  resetButtonColorsForAi();
  let randomIndexAi = Math.floor(Math.random() * buttons2.length);
  let selectedButtonAi = buttons2[randomIndexAi];
  selectedButtonAi.style.color = "blue";
  aiChoice = selectedButtonAi.id.replace("ai", "").toLowerCase();
}
function resetButtonColorsForPlayer() {
  buttons1.forEach(btn => {
    btn.style.color = "";
    btn.classList.remove('selected');
  });
}

function resetButtonColorsForAi() {
  buttons2.forEach(btn => {
    btn.style.color = "";
  });
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

// Style
textField0.style.color = "blue";
