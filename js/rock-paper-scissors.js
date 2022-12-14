const CHOICES = ['rock', 'paper', 'scissors'];
const WINNING_COMBOS = ['rock-scissors', 'paper-rock', 'scissors-paper'];
const WIN = 'win';
const LOSE = 'lose';
const TIE = 'tie';

let roundsToWin = 5;

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.playerChoice').forEach(btn => {
    btn.addEventListener('click', playRound);
});

let playAgainButton = createPlayAgainButton();

startGame();

function createPlayAgainButton() {
    let playAgainBtn = document.createElement('button');
    
    playAgainBtn.classList.add('btn');
    playAgainBtn.textContent = "Play again";
    playAgainBtn.addEventListener('click', resetGame);

    return playAgainBtn;
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#playerScore').textContent = 0;
    document.querySelector('#computerScore').textContent = 0; 
}

function resetGame() {
    document.querySelector('#playAgainPlaceHolder').removeChild(playAgainButton);
	document.querySelector('#outcomeText').textContent = '';
    
    enableGameButtons();
    startGame();
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return CHOICES[randomNumber];
}

function playRound(playerChoice) {
    let ps = playerChoice.target.id; /* button id */
    let cs = getComputerChoice();
    let roundOutcome = ps === cs ? TIE : 
        WINNING_COMBOS.includes(`${ps}-${cs}`) ? WIN : LOSE;

    if (roundOutcome === WIN) winRound(ps, cs);
    if (roundOutcome === LOSE) loseRound(ps, cs);
    if (roundOutcome === TIE) tieRound();

    if (playerScore === roundsToWin || computerScore === roundsToWin) gameOver();
}

function gameOver() {
    if (playerScore === roundsToWin) {
        document.querySelector('#outcomeText').textContent =
            `Congratulations! You win!`;
    }

    if (computerScore === roundsToWin) { 
        document.querySelector('#outcomeText').textContent =
            `You lose. Too bad, so sad...`;
    }

    disableGameButtons();

    document.querySelector('#playAgainPlaceHolder').appendChild(playAgainButton);
}

function tieRound() {
    document.querySelector('#outcomeText').textContent =
        `It's a tie!`;
}

function winRound(playerSelection, computerSelection) {
    playerScore += 1;

    document.querySelector('#outcomeText').textContent =
        `You Win! ${playerSelection} beats ${computerSelection}`;
    document.querySelector('#playerScore').textContent = playerScore;
}

function loseRound(playerSelection, computerSelection) {
    computerScore += 1;

    document.querySelector('#outcomeText').textContent = 
        `You Lose! ${computerSelection} beats ${playerSelection}`;
    document.querySelector('#computerScore').textContent = computerScore;
}

function disableGameButtons() {
    document.querySelectorAll('.playerChoice').forEach(btn => {
        btn.disabled = true;
    });
}

function enableGameButtons() {
    document.querySelectorAll('.playerChoice').forEach(btn => {
        btn.disabled = false;
    });
}
