// get computer choice by random and return it as play
function getComputerChoice() {
    const randomN = Math.random();
    switch (randomN) {
        case (Math.min(randomN, 1 / 3)):
            return 0;
        case (Math.min(randomN, 2 / 3)):
            return 1;
        default:
            return 2;
    };
}


// get human choice and test it
function getHumanChoice() {
    while (true) {
        let input = prompt('What is your play?\n - rock\n - paper\n - scissors');
        input = input.toLowerCase().trim();
        if (hand.includes(input)) {
            return hand.indexOf(input);
        };
    };
}


// play round
function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    const roundPoint = gameLogic(computerChoice, humanChoice);
    roundResultText(roundPoint);
    // scoreRound(roundPoint);
    // roundSummaryText();
}
// rock-paper-scissors logic game
function gameLogic(computerChoice, humanChoice) {
    let roundPoint = 0;

    if (computerChoice === humanChoice) {
    } else {
        // hand[x] and hands[y].win/lose are names: (rock, paper, scissor)
        // hands[choice].win is over what choice wins
        // hands[choice].lose is to what choice loses
        (hand[humanChoice] === hands[computerChoice].win) ? roundPoint-- : roundPoint++;
    };
    return roundPoint;
}

// display round result
function roundResultText(roundPoint) {
    let result;
    let play;
    humanChoice = hand[humanChoice][0].toUpperCase() + hand[humanChoice].slice(1); 
    computerChoice = hand[computerChoice].toLowerCase()
    
    if (roundPoint === 0) {
        console.log(`It is a tie! ${humanChoice} equals ${computerChoice}.`);
    } else {
        if (roundPoint === 1) {
            result = 'win';
            play = 'beats';
        } else {
            result = 'lose';
            play = 'loses to';
        };
        console.log(`You ${result}! ${humanChoice} ${play} ${computerChoice}!`);
    };
}


    // switch (point) {
    //     case 1:
    //         result = 'win';
    //         play = 'beats';
    //         break;
    //     case -1:
    //         result = 'lose';
    //         play = 'does not beat'
    //         break;
    //     case 0:
    //         result = 'tie';
    //         play = 'is equal to';
    //         console.log(`It is a ${result}! ${humanChoice} ${play} ${computerChoice}!`);
    //         return;
    // }
    // console.log(`You ${result}! ${humanChoice} ${play} ${computerChoice}!`);
// }
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
let computerChoice = 0;
let humanChoice = 0;
let humanScore = 0;
let computerScore = 0;
let round = 0;
let roundMax = 5;
const hands = [
    {hand: 'rock', win: 'scissor', lose: 'paper'},
    {hand: 'paper', win: 'rock', lose: 'scissor'},
    {hand: 'scissor', win: 'paper', lose: 'rock'}
]
const hand = ['rock', 'paper', 'scissor'];
