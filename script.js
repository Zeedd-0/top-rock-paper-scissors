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

// ----------------------------------------------------------------//
let humanScore = 0;
let computerScore = 0;
let round = 0;

