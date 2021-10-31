console.log("linked");

const resetButton = document.querySelector("#reset");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const plusPlayerOne = document.querySelector("#plusPlayerOne");
const plusPlayerTwo = document.querySelector("#plusPlayerTwo");
const maxScore = document.querySelector("#maxScore");
const defaultMax = document.querySelector("#defaultValue");
const winner = document.querySelector('#winner');
let playerOneTally = parseInt(playerOneScore.textContent);
let playerTwoTally = parseInt(playerTwoScore.textContent);


let maxScoreValue = parseInt(maxScore.value);
let changeCount = 0;

if (!maxScore.value) {
  plusPlayerOne.setAttribute("disabled", "disabled");
  plusPlayerTwo.setAttribute("disabled", "disabled");
}

maxScore.addEventListener("change", (e) => {
  console.log("changing now...");

  if (parseInt(maxScore.value) && changeCount === 0) {
    changeCount += 1;
    maxScoreValue = parseInt(maxScore.value);

    plusPlayerOne.removeAttribute("disabled");
    plusPlayerTwo.removeAttribute("disabled");
  } else {
    
    playerOneTally = 0;
    playerTwoTally = 0;

    playerOneScore.innerText = "0";
    playerTwoScore.innerText = "0";
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
    maxScoreValue = parseInt(maxScore.value);



    
  }
});

resetButton.addEventListener("click", (e) => {
  playerOneTally = 0;
  playerTwoTally = 0;

  playerOneScore.innerText = "0";
  playerTwoScore.innerText = "0";
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";

  maxScore.selectedIndex = 0;
  changeCount = 0;

  winner.innerText = "";

  maxScore.removeAttribute("disabled");
});

plusPlayerOne.addEventListener("click", (e) => {

  if (playerOneTally < maxScoreValue) {
    playerOneTally += 1;
    playerOneScore.textContent = `${playerOneTally}`;
  }

  if (playerOneTally === maxScoreValue) {
    playerOneScore.style.color = "green";
    playerTwoScore.style.color = "red";
    plusPlayerOne.setAttribute("disabled", "disabled");
    plusPlayerTwo.setAttribute("disabled", "disabled");
    winner.innerText = "Player One Won! Click Reset to Play Again."
    maxScore.setAttribute("disabled", "disabled")

  }
});

plusPlayerTwo.addEventListener("click", (e) => {
  if (playerTwoTally < maxScoreValue) {
    playerTwoTally += 1;
    playerTwoScore.textContent = `${playerTwoTally}`;
  }

  if (playerTwoTally === maxScoreValue) {
    playerOneScore.style.color = "red";
    playerTwoScore.style.color = "green";
    plusPlayerOne.setAttribute("disabled", "disabled");
    plusPlayerTwo.setAttribute("disabled", "disabled");
    winner.innerText = "Player Two Won! Click Reset to Play Again."

    maxScore.setAttribute("disabled", "disabled")

  }
});
