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
    let roundPoint = gameLogic();
    roundText(roundPoint);
    scoreRound(roundPoint);
}
// rock-paper-scissors logic game
function gameLogic() {
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
function roundText(point) {
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
            return;
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
    if (point === 1) {
        humanScore++;
    } else if (point === -1) {
        computerScore++;
    } else {
        return;
    }
    round++;
    console.log(`You ${humanScore} vs Computer ${computerScore}\n${roundMax - round} games to go!`);
}


// ----------------------------------------------------------------//
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let round = 0;
let roundMax = 5;
