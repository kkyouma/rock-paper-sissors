
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
        return win

    } else {
        return lose
    }
}
function validate(player){
    if(player==="rock"){
        console.log(1)
        return 1
    }else if(player==="paper"){
        console.log(1)
        return 1
    }else if(player==="scissors"){
        console.log(1)
        return 1
    }else{
        console.log(0)
        return 0
    }
}

function game() {

    let playerScore = 0
    let computerScore = 0

    for (round = 1; round <= 5; round++) {
        try{
            let playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase();
            while ( validate(playerSelection) == 0 ){
                playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase();
        }
        }catch(error){
            console.log(error);
        }

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
}

game();