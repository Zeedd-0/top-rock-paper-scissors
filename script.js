// get computer choice by random and return it
function getComputerChoice() {
    let choice = Math.floor((Math.random() + 0.1)* 10);
    if (choice < 10/3) {
        choice = 'rock';
    } else if (choice < 20/3) {
        choice ='paper';
    } else {
        choice = 'scissors';
    }
    console.log(choice);
    return choice;
}


// get human choice by tested and valid input
function getHumanChoice() {
    let choice = verifyInput();
    return choice;
}
// test human input and return it if valid
function verifyInput() {
    let keepGoing = 1;
    while (keepGoing) {
        input = prompt('What is your play?\n- rock\n- paper\n- scissors').toLowerCase().trim();
        keepGoing = !(input === 'rock' || input === 'paper' || input === 'scissors' || 0);
    }
    return input;
}


// play round
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let roundPoint = gameLogic(computerChoice, humanChoice);
    roundText(computerChoice, humanChoice, roundPoint);
    scoreRound(roundPoint);
}
// rock-paper-scissors logic game
function gameLogic(computerChoice, humanChoice) {
    let roundPoint = 0;
    switch (humanChoice) {
        case computerChoice:
            break;
        case 'rock':
            computerChoice === 'scissors' ? roundPoint++ : roundPoint--;
            break;
        case 'scissors':
            computerChoice === 'paper' ? roundPoint++ : roundPoint--;
            break;
        case 'paper':
            computerChoice === 'rock' ? roundPoint++ : roundPoint--;
            break;
    }
    return roundPoint;
}
// display round result
function roundText(computerChoice, humanChoice, point) {
    let result;
    let play;
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
            console.log(`It is a ${result}! ${humanChoice.split('')[0].toUpperCase() + humanChoice.slice(1, humanChoice.length)} ${play} ${computerChoice}!`);
            return;
    }
    console.log(`You ${result}! ${humanChoice.split('')[0].toUpperCase() + humanChoice.slice(1, humanChoice.length)} ${play} ${computerChoice}!`);
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
// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let round = 0;
let roundMax = 5;
