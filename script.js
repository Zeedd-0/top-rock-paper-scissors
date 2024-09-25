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
    switch (point) {
        case 1:
            result = 'win';
            break;
        case -1:
            result = 'lose';
            break;
        case 0:
            result = 'got a tie';
            break;
    }
    console.log(`You ${result}! \${} beats \${}`);
}


// ----------------------------------------------------------------//
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
let round = 0;
