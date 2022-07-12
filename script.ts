const choices: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".hand-choices button");
const opponent: HTMLElement = document.querySelector(".hand-opponent i");
const user: HTMLElement = document.querySelector(".hand-user i");

const handOutcomes = ["hand-scissors", "hand-back-fist", "hand"];

let opponentDataset = opponent.dataset["{element}"];
let userDataset = user.dataset["{element}"];

const matchResults: HTMLParagraphElement = document.querySelector(".match-results");
const wonCount: HTMLParagraphElement = document.querySelector("p.times-won");
let timesWon = 0;
const lostCount: HTMLParagraphElement = document.querySelector("p.times-lost");
let timesLost = 0;
const drawCount: HTMLParagraphElement = document.querySelector("p.times-draw");
let timesDraw = 0;

const animationReciever: HTMLElement = document.querySelector(".players-wrapper");

let choiceDataset: string;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    animationReciever.classList.add("shake-fists-animation");
    user.className = "result fa-regular fa-hand-back-fist";
    userDataset = "";
    opponent.className = "fa-regular fa-hand-back-fist";
    opponentDataset = "";
    choiceDataset = choice.dataset.element;
  });
});

// When animation ends...
animationReciever.addEventListener("animationend", () => {
  animationReciever.classList.remove("shake-fists-animation");
  // user recieves option chosen
  userDataset = choiceDataset;
  user.className = `result fa-regular fa-${userDataset}`;

  // Opponent recieves random data from array
  opponentRandomChoice();

  whoWon();
});

function opponentRandomChoice() {
  const randomDataset = Math.floor(Math.random() * handOutcomes.length);
  opponent.className = `fa-regular fa-${handOutcomes[randomDataset]}`;
  opponentDataset = handOutcomes[randomDataset];
}

function whoWon() {
  if (
    (opponentDataset == "hand-scissors" && userDataset == "hand-back-fist") ||
    (opponentDataset == "hand-back-fist" && userDataset == "hand") ||
    (opponentDataset == "hand" && userDataset == "hand-scissors")
  ) {
    matchWon();
  } else if (opponentDataset == userDataset) {
    matchDraw();
  } else {
    matchLost();
  }
}

function matchWon() {
  timesWon += 1;
  wonCount.innerText = `${timesWon}`;
  matchResults.innerText = "Yeah! You won!";
}

function matchDraw() {
  timesDraw += 1;
  drawCount.innerText = `${timesDraw}`;
  matchResults.innerText = "Draw!";
}

function matchLost() {
  timesLost += 1;
  lostCount.innerText = `${timesLost}`;
  matchResults.innerText = "Uh oh. You lost";
}
