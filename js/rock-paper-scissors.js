// Array (rock, paper, scissors)
const CHOICE = ['rock', 'paper', 'scissors'];

// FUNCTION Get Computer Choice
function getComputerChoice() {
    // 	Generate a random number between 0 and 2 and save it to a variable called randomNumber
    let randomNumber = Math.floor(Math.random() * 3);

    // 	return array item corresponding to random number
    return CHOICE[randomNumber];
}
