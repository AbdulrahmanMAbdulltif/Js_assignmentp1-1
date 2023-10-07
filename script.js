const startButton = document.querySelector("#start");
startButton.addEventListener("click", game);

function playAround(playerSelection, computerSelection) {
  /*check the user input*/

  if ((playerSelection === "rock") & (computerSelection === "paper")) {
    return `You lose! My ${computerSelection} beats your ${playerSelection}`;
  } else if ((playerSelection === "rock") & (computerSelection === "rock")) {
    return `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`;
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "scissors")
  ) {
    return `You win! Your ${playerSelection} beats my ${computerSelection}`;
  } else if ((playerSelection === "paper") & (computerSelection === "rock")) {
    return `You win! Your ${playerSelection} beats my ${computerSelection}`;
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "scissors")
  ) {
    return `You lose! My ${computerSelection} beats your ${playerSelection}`;
  } else if ((playerSelection === "paper") & (computerSelection === "paper")) {
    return `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`;
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "scissors")
  ) {
    return `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`;
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "paper")
  ) {
    return `You win! Your ${playerSelection} beats my ${computerSelection}`;
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "rock")
  ) {
    return `You lose! My ${computerSelection} beats your ${playerSelection}`;
  } else {
    return "Something is wrong, try again";
  }
}

function playerPlayed() {
  let playerChoice = prompt("Please enter rock, paper, or scissors:");
  playerChoice = playerChoice.toLowerCase();

  while (true) {
    if (
      isNaN(playerChoice) && // Check if it's not a number
      (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")
    ) {
      return playerChoice; // Return the valid choice and exit the loop
    } else {
      playerChoice = prompt("Wrong Input. Try again. Enter rock, paper, or scissors.");
      playerChoice = playerChoice.toLowerCase();
    }
  }
}

function computerPlay() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "scissors";
  } else {
    return "paper";
  }
}

function game() {
  let gameRound;
  let playerScore = 0;
  let computerScore = 0;
  for (let gameRound = 0; gameRound < 5; gameRound++) {
    const playerSelection = playerPlayed();
    if (playerSelection === null) {
      quittingGame();
      //   playerPlayed();
      break;
    }
    const computerSelection = computerPlay();
    let check = playAround(playerSelection, computerSelection);
    console.log(check);

    if (check.includes("You win!")) {
      playerScore += 1;
    } else if (check.includes("You lose!")) {
      computerScore += 1;
    }
  }

  if (gameRound < 5) {
    return quittingGame();
  } else if (playerScore > computerScore) {
    return playerWins();
  } else if (computerScore > playerScore) {
    return computerWins();
  } else {
    return drawPlay();
  }
}


function quittingGame() {
  const textTitle = document.querySelector(".title");
  const textParagraf = document.querySelectorAll(".paragraph");
  const buttonText = document.querySelector("#start");

  textTitle.textContent = `Running away, are you?`;
  textParagraf[0].textContent = "That's right, run and hide";
  textParagraf[1].textContent = " while I conquer the world";
  textParagraf[2].textContent = "muahhhhaahahahahaah";
  buttonText.textContent = "GET BACK TO THE GAME";
  playerPlayed();
}

function playerWins() {
  const textTitle = document.querySelector(".title");
  const textParagraf = document.querySelectorAll(".paragraph");
  const buttonText = document.querySelector("#start");
  const backgroundWinner = document.body;

  backgroundWinner.style.background = "#ff0000";
  textTitle.textContent = `Oh noooo!!! Ohhh nooo`;
  textParagraf[0].textContent = "You defeated me!";
  textParagraf[1].textContent = "😱😱😱😱";
  textParagraf[2].textContent = "How was this possible?!";
  buttonText.textContent = "Wipe out every trace";
}

function computerWins() {
  const textTitle = document.querySelector(".title");
  const textParagraf = document.querySelectorAll(".paragraph");
  const buttonText = document.querySelector("#start");
  const backgroundWinner = document.body;

  backgroundWinner.style.background = "#0000cc";
  textTitle.textContent = `GAME OVER! Loserrrrr . `;
  textParagraf[0].textContent = "😂😂😂😂";
  textParagraf[1].textContent = "Now, I shall conquer the world!";
  textParagraf[2].textContent = "😈😈😈";
  buttonText.textContent = "Start world domination!!";
}

function drawPlay() {
  const textTitle = document.querySelector(".title");
  const textParagraf = document.querySelectorAll(".paragraph");
  const buttonText = document.querySelector("#start");

  textTitle.textContent = `It's a tie! Let's play again.`;
  textParagraf[0].textContent = "You will never defeat me";
  textParagraf[1].textContent = "I shall conquer the world!";
  textParagraf[2].textContent = "😈😈😈";
  buttonText.textContent = "Restart the game";
}

