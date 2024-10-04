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
function getHumanChoice(automatic = 1) {
    if (automatic) {
        const randomN = Math.random();
        switch (randomN) {
            case (Math.min(randomN, 1 / 3)):
                return 0;
            case (Math.min(randomN, 2 / 3)):
                return 1;
            default:
                return 2;
        };            
    } else {
        while (true) {
            let input = prompt('What is your play?\n - rock\n - paper\n - scissors');
            input = input.toLowerCase().trim();
            if (hand.includes(input)) {
                return hand.indexOf(input);
            };
        };
    }
}


// play round
function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getComputerChoice()// getHumanChoice();
    const roundPoint = gameLogic(computerChoice, humanChoice);
    roundResultText(roundPoint);
    scoreRound(roundPoint);
    roundSummaryText();
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
        console.log(`It is a tie! ${humanChoice} equals to ${computerChoice}.`);
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


// storing round score
function scoreRound(roundPoint) {
    if (roundPoint === 0) {
    } else {
        if (roundPoint === 1) {
            humanScore++;
        } else {
            computerScore++;
        }
        console.log(`You ${humanScore} vs Computer ${computerScore}`);
    }
}

// round summary text
function roundSummaryText(){
    let result;
    if (Math.max(humanScore, computerScore) < requiredWins) {
        console.log(`${requiredWins - humanScore} rounds to win!`);
    } else {
        humanScore > computerScore ? result = 'won' : result = 'lost';
        console.log(`You ${result}!`);
    }
}


// play game with roundMAx rounds
function playGame() {
    if (Math.max(humanScore, computerScore) < requiredWins) {
        playRound();
    } else {
        humanScore = 0;
        computerScore = 0;
        console.log('New game started!')
        playRound();
    };
}


// ----------------------------------------------------------------//
let computerChoice = 0;
let humanScore = 0;
let computerScore = 0;
let humanChoice = 0;
let roundMax = 5;
let requiredWins = Math.floor(roundMax / 2) + 1;
const hands = [
    {hand: 'rock', win: 'scissor', lose: 'paper'},
    {hand: 'paper', win: 'rock', lose: 'scissor'},
    {hand: 'scissor', win: 'paper', lose: 'rock'}
]
const hand = ['rock', 'paper', 'scissor'];
