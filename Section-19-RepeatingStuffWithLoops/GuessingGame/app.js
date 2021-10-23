let exitInfo = "To Exit: enter 'q'";

let response = prompt(
  "Welcome! \nEnter a Maximum Number! \n(To exit the game: Enter 'q')"
);

while (response !== "q") {
  while (!parseInt(response)) {
    response = prompt(
      "Please enter a valid number. \n(To exit the game: Enter 'q')"
    );
  }

  if (response === "q") break;

  let maximumNumber = parseInt(response);

  const actualNumber = Math.floor(Math.random() * maximumNumber) + 1;

  response = prompt("Please enter your guess. \n(To exit the game: Enter 'q')");

  if (response === "q") break;

  let attempts = 1;

  while (parseInt(response) !== actualNumber && response !== "q") {
    attempts++;
    if (!parseInt(response)) {
      response = prompt(
        "Please enter a valid number. \n(To exit the game: Enter 'q')"
      );
    } else if (response > actualNumber) {
      response = prompt(
        "Your guess is too high!  \n(To exit the game: Enter 'q')"
      );
    } else {
      response = prompt(
        "Your guess is too low!  \n(To exit the game: Enter 'q')"
      );
    }
  }

  if (response !== "q") {
    alert(`It took you ${attempts} guesses, but you did it. You Won!`);
    response = prompt(
      "Let's play again! \nEnter a Maximum Number! \n(To exit the game: Enter 'q')"
    );
  }
}

alert("You've exited the game!");
