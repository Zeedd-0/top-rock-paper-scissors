// get computer choice by random and return it as play
function getComputerChoice() {
    let randomN = Math.random();
    switch (randomN) {
        case (Math.min(randomN, 1 / 3)):
            return 0;
        case (Math.min(randomN, 2 / 3)):
            return 1;
        default:
            return 2;
    };
}


// get human choice by tested and valid input
function getHumanChoice() {
    return verifyHumanChoice();
}
// test human input and return it if valid
function verifyHumanChoice() {
    let keepGoing = 1;
    while (keepGoing) {
        input = prompt('What is your play?\n - rock\n - paper\n - scissors');
        input = input.toLowerCase().trim();
        if (hand.includes(input)) {
            keepGoing = 0;
            return input;
        };
    };
}


// play round
function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    let roundPoint = gameLogic(computerChoice, humanChoice);
    roundResultText(roundPoint);
    scoreRound(roundPoint);
    roundSummaryText();
}
// rock-paper-scissors logic game
function gameLogic(computerChoice, humanChoice) {
    let roundPoint = 0;
    // switch (humanChoice) {
    //     case computerChoice:
    //         break;
    //     case hand[0]:
    //         computerChoice === 'scissors' ? roundPoint++ : roundPoint--;
    //         break;
    //     case hand[1]:
    //         computerChoice === 'paper' ? roundPoint++ : roundPoint--;
    //         break;
    //     case hand[2]:
    //         computerChoice === 'rock' ? roundPoint++ : roundPoint--;
    //         break;
    // }
    if (humanChoice !== computerChoice) {
        let compIndex = hand.indexOf(computerChoice);
        (humanChoice === hands[compIndex].win)
        
    };
    return roundPoint;
}
// display round result
function roundResultText(point) {
    let result;
    let play;
    humanChoice = humanChoice.split('')[0].toUpperCase() + humanChoice.slice(1, humanChoice.length); 
    switch (point) {
        case 1:
            result = 'win';
            play = 'beats';
            break;
        case -1:
            result = 'lose';
            play = 'does not beat'
            break;
        case 0:
            result = 'tie';
            play = 'is equal to';
            console.log(`It is a ${result}! ${humanChoice} ${play} ${computerChoice}!`);
            return;
    }
    console.log(`You ${result}! ${humanChoice} ${play} ${computerChoice}!`);
}
// storing round score
function scoreRound(point) {
    let result;
    if (point === 1) {
        humanScore++;
    } else if (point === -1) {
        computerScore++;
    } else {
        return;
    }
    round++;
    console.log(`You ${humanScore} vs Computer ${computerScore}`);
}
// round summary text
function roundSummaryText(){
    if (round !== roundMax) {
        console.log(`${roundMax - round} rounds to go!`);
    } else {
        humanScore > computerScore ? result = 'won' : result = 'lost';
        console.log(`You ${result}!`);
    }
}


// play game with roundMAx rounds
function playGame() {
    if (round < roundMax) {
        playRound();
    } else {
        round = 0;
        humanScore = 0;
        computerScore = 0;
        alert('New game started!');
        playRound();
    };
}


// ----------------------------------------------------------------//
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let round = 0;
let roundMax = 5;
const hands = [
    {hand: 'rock', win: 'scissor', lose: 'paper'},
    {hand: 'scissor', win: 'paper', lose: 'rock'},
    {hand: 'paper', win: 'rock', lose: 'scissor'}
]
const hand = ['rock', 'scissor', 'paper'];
