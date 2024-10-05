// ----------------------------------------------------------------//
// GAME LOGIC FUNCTIONS
// get computer choice by random and return it as play
function getComputerChoice() {
    const RANDOM_N = Math.random();
    switch (RANDOM_N) {
        case (Math.min(RANDOM_N, 1 / 3)):
            return 0;
        case (Math.min(RANDOM_N, 2 / 3)):
            return 1;
        default:
            return 2;
    };
}

// get human choice
function getHumanChoice(choice) {
        let input = choice.toLowerCase().trim();
        return HAND.indexOf(input);
}


// play round
function playRound() {
    const ROUND_POINT = gameLogic();
    roundResultText(ROUND_POINT);
    scoreRound(ROUND_POINT);
    roundSummaryText();
}

// rock-paper-scissors logic game
function gameLogic() {
    let roundPoint = 0;

    if (computerChoice === humanChoice) {
    } else {
        // HAND[x] and HANDS[y].win/lose are names: (rock, paper, scissor)
        // HANDS[choice].win is what choice wins over
        // HANDS[choice].lose is what choice loses to
        (HAND[humanChoice] === HANDS[computerChoice].win) ? roundPoint-- : roundPoint++;
    };
    return roundPoint;
}


// display round result
function roundResultText(roundPoint) {
    let result = '';
    humanChoice = HAND[humanChoice][0].toUpperCase() + HAND[humanChoice].slice(1); 
    computerChoice = HAND[computerChoice].toLowerCase()

    switch (roundPoint) {
        case 0:
            result = `It is a tie! ${humanChoice} equals to ${computerChoice}.`;
            break;
        case 1:
            result = `You win! ${humanChoice} beats ${computerChoice}!`;
            break;
        case -1:
            result = `You lose! ${humanChoice} loses to ${computerChoice}!`;
            break;
    };
    displayResultText(result);
};


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
    if (Math.max(humanScore, computerScore) < REQUIRED_WINS) {
        console.log(`${REQUIRED_WINS - humanScore} rounds to win!`);
    } else {
        humanScore > computerScore ? result = 'won' : result = 'lost';
        console.log(`You ${result}!`);
    }
}


// play game with roundMAx rounds
function playGame() {
    if (Math.max(humanScore, computerScore) < REQUIRED_WINS) {
        playRound();
    } else {
        humanScore = 0;
        computerScore = 0;
        console.log('New game started!')
        playRound();
    };
}


// ----------------------------------------------------------------//
// INTERACTION
// global variables
const SELECTIONS = document.querySelectorAll('button');
const RESULT_TEXT = document.querySelector('#text');

// events
SELECTIONS.forEach(selection => {
    selection.addEventListener('click', (e) => {
        selectStyle(e);
        humanChoice = getHumanChoice(e.target.innerText);
        computerChoice = getComputerChoice();
        setTimeout(() => {
            computerStyle();
        }, 200);
        setTimeout(() => {
            playRound();
        }, 1600);
    });
});

// choice selection and computer choice
function selectStyle(e) {
    e.target.classList.add('selected', 'human-choice');
}
function computerStyle() {
    let choice = document.querySelector('#computerPlay > .choice');
    choice.classList.add('selected');
    setTimeout(() => {
        choice.classList.add('computer-choice');
        choice.innerText = HAND[computerChoice];
    }, 800);
};

// result text
function displayResultText(text) {
    RESULT_TEXT.innerText = text;
}


const test = document.querySelectorAll('#computer div');
function testi() {
    test.forEach(sphere => {
    sphere.style.backgroundColor = 'red';
});
}


// ----------------------------------------------------------------//
// VARIABLES GLOBAL
let computerChoice = 0;
let humanScore = 0;
let computerScore = 0;
let humanChoice = 0;
const REQUIRED_WINS = 5;
const HANDS = [
    {hand: 'rock', win: 'scissor', lose: 'paper'},
    {hand: 'paper', win: 'rock', lose: 'scissor'},
    {hand: 'scissor', win: 'paper', lose: 'rock'}
]
const HAND = ['rock', 'paper', 'scissor'];
