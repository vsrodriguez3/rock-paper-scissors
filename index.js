function getComputerChoice() {
    let randomNumber = Math.floor( Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = "roCk";
    computerSelection = getComputerChoice();

    if(playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    }
    if(playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return "You won!";
        } else if (computerSelection === "paper") {
            return "The computer has won!";
        }
    } else {
        return "error";
    }
}