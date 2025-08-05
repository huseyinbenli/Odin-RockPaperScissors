const rck = "rock";
const ppr = "paper";
const scs = "scissors";
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    computerChoice = rck;
  } else if (random === 1) {
    computerChoice = ppr;
  } else {
    computerChoice = scs;
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (humanChoice !== rck && humanChoice !== ppr && humanChoice !== scs) {
    humanChoice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return humanChoice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);
  console.log(`You chose: ${humanChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === rck && computerChoice === scs) ||
    (humanChoice === ppr && computerChoice === rck) ||
    (humanChoice === scs && computerChoice === ppr)
  ) {
    console.log("You win this round!");
    humanScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }

  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  if (humanScore < 5 && computerScore < 5) {
    playRound();
    playGame();
  } else if (humanScore === 5) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore === 5) {
    console.log("Computer wins the game! Better luck next time!");
  }
}
