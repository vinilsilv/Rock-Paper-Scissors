let buttons = document.querySelectorAll(".pick-one button");
const opponent = document.getElementById("opponent-result");
const player = document.getElementById("player-result");
let opponentData = opponent.dataset["{element}"];
let playerData = player.dataset["{element}"];

const dataArr = ["hand-scissors", "hand-back-fist", "hand"];

const matchResults = document.querySelector("p#match-results");
const wonCount = document.querySelector("p.times-won");
let timesWon = 0;

const lostCount = document.querySelector("p.times-lost");
let timesLost = 0;

const drawCount = document.querySelector("p.times-draw");
let timesDraw = 0;

const animationReciever = document.querySelector(".players-wrapper");

let buttonData;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    animationReciever.classList.add("fists-animation");
    player.className = "result fa-regular fa-hand-back-fist";
    playerData = "";
    opponent.className = "fa-regular fa-hand-back-fist";
    opponentData = "";
    buttonData = button.dataset.element;
  });
});

// When animation ends...
animationReciever.addEventListener("animationend", () => {
  animationReciever.classList.remove("fists-animation");
  // Player recieves option chosen
  playerData = buttonData;
  player.className = `result fa-regular fa-${playerData}`;

  // Opponent recieves random data from array
  opponentRandom();

  whoWon();
});

function opponentRandom() {
  const randomData = Math.floor(Math.random() * dataArr.length);
  opponent.className = `fa-regular fa-${dataArr[randomData]}`;
  opponentData = dataArr[randomData];
}

function whoWon() {
  if (
    (opponentData == "hand-scissors" && playerData == "hand-back-fist") ||
    (opponentData == "hand-back-fist" && playerData == "hand") ||
    (opponentData == "hand" && playerData == "hand-scissors")
  ) {
    matchWon();
  } else if (opponentData == playerData) {
    matchDraw();
  } else {
    matchLost();
  }
}

function matchWon() {
  timesWon++;
  wonCount.innerText = timesWon;
  matchResults.innerText = "Yeah! You won!";
}

function matchDraw() {
  timesDraw++;
  drawCount.innerText = timesDraw;
  matchResults.innerText = "Draw!";
}

function matchLost() {
  timesLost++;
  lostCount.innerText = timesLost;
  matchResults.innerText = "Uh oh. You lost";
}
