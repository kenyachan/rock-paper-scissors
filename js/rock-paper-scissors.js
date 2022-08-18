// Array (rock, paper, scissors)
const CHOICE = ['rock', 'paper', 'scissors'];

// FUNCTION Get Computer Choice
function getComputerChoice() {
    // 	Generate a random number between 0 and 2 and save it to a variable called randomNumber
    let randomNumber = Math.floor(Math.random() * 3);

    // 	return array item corresponding to random number
    return CHOICE[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === cs) {
        return `It's a tie! You've both picked '${ps}'`;
    }

    if (ps === 'rock' && cs === 'scissors') {
        return 'You Win! Rock beats Scissors';
    }

    if (ps === 'paper' && cs === 'rock') {
        return 'You Win! Paper beats Rock';
    }

    if (ps === 'scissors' && cs === 'paper') {
        return 'You Win! Scissors beats Paper';
    }

    if (ps === 'rock' && cs === 'paper') {
        return 'You Lose! Paper beats Rock';
    }

    if (ps === 'paper' && cs === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    }

    if (ps === 'scissors' && cs === 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));