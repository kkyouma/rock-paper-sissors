
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomSelection = Math.floor(Math.random() * 3);
    const choice = options[randomSelection];
    return choice;
}

const win = "You win!";
const lose = "You lose";
const draw = "Its a draw";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw 

    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return win;

    } else {
        return lose;
    }
}

const rockBotton = document.getElementById("rock");
const paperBotton = document.getElementById("paper");
const scissorsBotton = document.getElementById("scissors");

function game() {

    let playerScore = 0
    let computerScore = 0

    const playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log("Round: " + round);
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log("Result: " + result);
    if (result === win) {
        playerScore++;
    } else if (result === lose) {
        computerScore++;
    }
    }

    if (playerScore > computerScore) {
        console.log(`You win! with ${playerScore} hits vs ${computerScore} of the computer`);
    } else if (playerScore < computerScore) {
        console.log(`You lose, computer wins with ${computerScore} hits vs ${playerScore} of yours`);
    } else if (playerScore === computerScore) {
        console.log(`The game has ended in a tie`);
    }

game();