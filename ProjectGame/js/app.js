//  Variables
  // Buttons
let button0 = document.getElementById("button0");

  //Text
const textField0 = document.getElementById("text0");
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("result");
let totalScoreText = document.getElementById("totalScoreText");
let playerHistoryText = document.getElementById("playerHistory");
let aiHistoryText = document.getElementById("aiHistory");

  //Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let drawScore = 0;
let playerScoreHistory = [];
let aiScoreHistory = [];


//Process
tryLoadGame();
showAllResult();

button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  compareRolls();
  showAllResult();
  // showPlayerAllResult();
  // showAiAllResult();
  saveScore();

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
    playerScoreHistory.push(1);
    aiScoreHistory.push(0);
    showText("Player wins this round!");
  } else if (playerRoll < aiRoll) {
    aiScore++;
    playerScoreHistory.push(0);
    aiScoreHistory.push(1);
    showText("AI wins this round!");
  } else {
    drawScore++;
    playerScoreHistory.push(0);
    aiScoreHistory.push(0);
    showText("Draw");
  }
}

//Cookies
function saveScore(){
document.cookie = "playerScore=" + playerScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
document.cookie = "aiScore=" + aiScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
}

function tryLoadGame(){
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
  //showScore();
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


// View
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

function showPlayerAllResult() {
  let totalGames = playerScore + aiScore + drawScore;
  let playerWinsNumber = playerScoreHistory.filter(score => score === 1).length;
  playerHistoryText.innerHTML = "Player wins " + playerWinsNumber + " times " + "of " + totalGames + " games";
 }

function showAiAllResult() {
  let totalGames = playerScore + aiScore + drawScore;
  let aiWinsNumber = aiScoreHistory.filter(score => score === 1).length;
  aiHistoryText.innerHTML = "AI wins " + aiWinsNumber + " times" + "of " + totalGames + " games";
}

// Style
textField0.style.color = "red";
button0.style.color = "red";

