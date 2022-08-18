// Array (rock, paper, scissors)
const CHOICE = ['rock', 'paper', 'scissors'];
const WINNING_COMBOS = ['rock-scissors', 'paper-rock', 'scissors-paper'];

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

    // Tie game
    if (ps === cs) return;
    
    // Checks whether player has a winning combo
    return WINNING_COMBOS.filter(x => x === `${ps}-${cs}`).length === 1 ? true : false;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        
        let roundOutcome = playRound(playerSelection, computerSelection);
        
        switch (roundOutcome) {
            case true:
                playerScore++;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case false:
                computerScore++;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            default:
                console.log("It's a tie!");
                break;
        }
    }

    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
}

game();