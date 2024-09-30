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
let resultText = document.getElementById("result");
let totalScoreText = document.getElementById("totalScoreText");
let playerHistoryText = document.getElementById("playerHistory");
let aiHistoryText = document.getElementById("aiHistory");
let DrawText = document.getElementById("Draw");

//Data
let buttons1 = [playersRock, playersPaper, playersScissors];
let buttons2 = [aiRock, aiPaper, aiScissors];
let playerChoice = "";
let aiChoice = "";
let playerScore = 0;
let aiScore = 0;
let drawScore = 0;
let playerScoreHistory = [];
let aiScoreHistory = [];

//Process
tryLoadGame();
showAllResult();

playersRock.addEventListener("click", function () {
  selectButtonForPlayer(playersRock);
  selectRandomButtonForAi();
  compareResults();
  showPlayerAllResult();
  showAiAllResult();
  saveScore();
  showDraw();
});

playersPaper.addEventListener("click", function () {
  selectButtonForPlayer(playersPaper);
  selectRandomButtonForAi();
  compareResults();
  showPlayerAllResult();
  showAiAllResult();
  saveScore();
  showDraw();
});

playersScissors.addEventListener("click", function () {
  selectButtonForPlayer(playersScissors);
  selectRandomButtonForAi();
  compareResults();
  showPlayerAllResult();
  showAiAllResult();
  saveScore();
  showDraw();
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
    playerScoreHistory.push(1);
    aiScoreHistory.push(0);
    showText("Player wins this round!");
  } else if (playerChoice === aiChoice){
    drawScore++;
    playerScoreHistory.push(0);
    aiScoreHistory.push(0);
    showText("Draw ");
  } else {
    aiScore++;
    playerScoreHistory.push(0);
    aiScoreHistory.push(1);
  showText("AI wins this round!");
  }
}
// Cookies
function saveScore(){
  document.cookie = "playerScore=" + playerScore + ";expires=Thu, 18 Dec 2027 12:00:00 UTC";
  document.cookie = "aiScore=" + aiScore + ";expires=Thu, 18 Dec 2027 12:00:00 UTC";
}

function tryLoadGame(){
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return 0;
}

//View
function showText(result) {
  resultText.innerHTML = result;
}

function showAllResult(){
  totalScoreText.innerHTML = "Total score: Player - " + playerScore + "; AI - " + aiScore;
}

function showPlayerAllResult() {
  let playerWinsNumber = 0;
  for (let i = 0; i < playerScoreHistory.length; i++) {
    if (playerScoreHistory[i] === 1) {
      playerWinsNumber++;
    }
  }
  playerHistoryText.innerHTML = "Player wins " + playerWinsNumber;
}

function showAiAllResult() {
  let aiWinsNumber = 0;
  for (let i = 0; i < aiScoreHistory.length; i++) {
    if (aiScoreHistory[i] === 1) {
      aiWinsNumber++;
    }
  }
  aiHistoryText.innerHTML = "AI wins " + aiWinsNumber;
}

function showDraw(){
  DrawText.innerHTML = "Draw " + drawScore;
}

// Style
textField0.style.color = "blue";
document.body.style.textAlign = "center";
document.body.style.fontSize = "20px";
