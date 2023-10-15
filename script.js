
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomSelection = Math.floor(Math.random() * 3);
    const choice = options[randomSelection];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const win = "You win!";
    const lose = "You lose";
    const draw = "Its a draw";

    if (playerSelection === computerSelection) {
        return draw 

    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return win

    } else {
        return lose
    }
}
const computerSelection = getComputerChoice();
const playerSelection = "rock";
let result = playRound(playerSelection, computerSelection);

