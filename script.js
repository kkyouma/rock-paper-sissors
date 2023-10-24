
// Esto esta ok
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
//


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
    game("rock");
});

paperButton.addEventListener("click", () => {
    game("paper");
});

scissorsButton.addEventListener("click", () => {
    game("scissors");
});

let playerScore = 0
let computerScore = 0

function game(option) {

    const playerSelection = option;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection)

    //console.log("Round: " + round);
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log("Result: " + result);
    
    if (result === win) {
        playerScore++;
    } else if (result === lose) {
        computerScore++;
    }

    if (playerScore === 5) {
        alert(`You win! with ${playerScore} hits vs ${computerScore} of the computer`);
    } else if (playerScore === 5) {
        alert(`You lose, computer wins with ${computerScore} hits vs ${playerScore} of yours`);
    }
}