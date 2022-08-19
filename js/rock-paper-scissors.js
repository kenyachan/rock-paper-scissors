const CHOICE = ['rock', 'paper', 'scissors'];
const WINNING_COMBOS = ['rock-scissors', 'paper-rock', 'scissors-paper'];
const WIN = 'win';
const LOSE = 'lose';
const TIE = 'tie;'

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    return CHOICE[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === cs) return TIE;
    
    return WINNING_COMBOS.includes(`${ps}-${cs}`) ? WIN : LOSE;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        
        let roundOutcome = playRound(playerSelection, computerSelection);
        
        switch (roundOutcome) {
            case WIN:
                playerScore++;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case LOSE:
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