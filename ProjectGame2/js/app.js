//  Variables
// Buttons
let playersRockBtn = document.getElementById("playersRockBtn");
let playersPaperBtn = document.getElementById("playersPaperBtn");
let playersScissorsBtn = document.getElementById("playersScissorsBtn");
let button0 = document.getElementById("Button0");
let aiRockBtn = document.getElementById("aiRockBtn");
let aiPaperBtn = document.getElementById("aiPaperBtn");
let aiScissorsBtn = document.getElementById("aiScissorsBtn");

//Text
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

//Data
let buttons1 = [playersRockBtn, playersPaperBtn, playersScissorsBtn];
let buttons2 = [aiRockBtn, aiPaperBtn, aiScissorsBtn];

//Process
button0.addEventListener("click", function () {
 selectRandomButtonForPlayer();
 selectRandomButtonForAi();
 resetButtonColorsForPlayer();
 resetButtonColorsForAi();
});

// Controllers
function selectRandomButtonForPlayer() {
  let randomIndexPlayer = Math.floor(Math.random() * buttons1.length);
  let selectedButtonPlayer = buttons1[randomIndexPlayer];
  selectedButtonPlayer.style.color = "blue";
}

function resetButtonColorsForPlayer() {
  playersRockBtn.style.color = "";
  playersPaperBtn.style.color = "";
  playersScissorsBtn.style.color = "";
}

button0.addEventListener("click", selectRandomButtonForPlayer);

function selectRandomButtonForAi() {
  let randomIndexAi = Math.floor(Math.random() * buttons2.length);
  let selectedButtonAi = buttons2[randomIndexAi];
  selectedButtonAi.style.color = "blue";
}

function resetButtonColorsForAi() {
  aiRockBtn.style.color = "";
  aiPaperBtn.style.color = "";
  aiScissorsBtn.style.color = "";
}

button0.addEventListener("click", selectRandomButtonForAi);
