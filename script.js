var choices = document.querySelectorAll(".hand-choices button");
var opponent = document.querySelector(".hand-opponent i");
var user = document.querySelector(".hand-user i");
var handOutcomes = ["hand-scissors", "hand-back-fist", "hand"];
var opponentDataset = opponent.dataset["{element}"];
var userDataset = user.dataset["{element}"];
var matchResults = document.querySelector(".match-results");
var wonCount = document.querySelector("p.times-won");
var timesWon = 0;
var lostCount = document.querySelector("p.times-lost");
var timesLost = 0;
var drawCount = document.querySelector("p.times-draw");
var timesDraw = 0;
var animationReciever = document.querySelector(".players-wrapper");
var choiceDataset;
choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        animationReciever.classList.add("shake-fists-animation");
        user.className = "result fa-regular fa-hand-back-fist";
        userDataset = "";
        opponent.className = "fa-regular fa-hand-back-fist";
        opponentDataset = "";
        choiceDataset = choice.dataset.element;
    });
});
// When animation ends...
animationReciever.addEventListener("animationend", function () {
    animationReciever.classList.remove("shake-fists-animation");
    // user recieves option chosen
    userDataset = choiceDataset;
    user.className = "result fa-regular fa-".concat(userDataset);
    // Opponent recieves random data from array
    opponentRandomChoice();
    whoWon();
});
function opponentRandomChoice() {
    var randomDataset = Math.floor(Math.random() * handOutcomes.length);
    opponent.className = "fa-regular fa-".concat(handOutcomes[randomDataset]);
    opponentDataset = handOutcomes[randomDataset];
}
function whoWon() {
    if ((opponentDataset == "hand-scissors" && userDataset == "hand-back-fist") ||
        (opponentDataset == "hand-back-fist" && userDataset == "hand") ||
        (opponentDataset == "hand" && userDataset == "hand-scissors")) {
        matchWon();
    }
    else if (opponentDataset == userDataset) {
        matchDraw();
    }
    else {
        matchLost();
    }
}
function matchWon() {
    timesWon += 1;
    wonCount.innerText = "".concat(timesWon);
    matchResults.innerText = "Yeah! You won!";
}
function matchDraw() {
    timesDraw += 1;
    drawCount.innerText = "".concat(timesDraw);
    matchResults.innerText = "Draw!";
}
function matchLost() {
    timesLost += 1;
    lostCount.innerText = "".concat(timesLost);
    matchResults.innerText = "Uh oh. You lost";
}
