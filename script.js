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
    getScore();
    scoreRound(ROUND_POINT);
    // roundSummaryText();
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


// display round result text
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
    RESULT_TEXT.innerText = result;
};


// marking round score
function scoreRound(roundPoint) {
    switch (roundPoint) {
        case 0:
            break;
        case 1:
            HUMAN_BOARD[HUMAN_BOARD.length - humanScore - 1].classList.add('human-point');
            break;
        case -1:
            COMPUTER_BOARD[computerScore].classList.add('computer-point');
            break;
    };
}

// round summary text
// function roundSummaryText(){
//     let result;
//     if (Math.max(humanScore, computerScore) < REQUIRED_WINS) {
//         console.log(`${REQUIRED_WINS - humanScore} rounds to win!`);
//     } else {
//         humanScore > computerScore ? result = 'won' : result = 'lost';
//         console.log(`You ${result}!`);
//     }
// }


// play game with roundMAx rounds
function playGame() {
    if (Math.max(humanScore, computerScore) < REQUIRED_WINS) {
        playRound();
    } else {
        humanScore = 0;
        computerScore = 0;
        console.log('New game started!')
        // AQUI AQUI AQUI AQUI AQUI AQUI AQUI AQUI AQUI AQUI 
        playRound();
    };
}


// ----------------------------------------------------------------//
// INTERACTION
// global variables
const COMPUTER_BOARD = document.querySelectorAll('#computer > div')
const HUMAN_BOARD = document.querySelectorAll('#human > div')
const SELECTIONS = document.querySelectorAll('#humanPlay > button');
const RESULT_TEXT = document.querySelector('#text');
const PLAY_BTN = document.querySelector('#play-div');
const GAME_PAGE = document.querySelector('#frontpage-section');

// events
// PLAY_BTN.addEventListener('click', (e) => {
//     GAME_PAGE.classList.add('invisible');
// })

SELECTIONS.forEach(selection => {
    selection.addEventListener('click', (e) => {
        selectStyle(e);
        humanChoice = getHumanChoice(e.target.innerText);
        computerChoice = getComputerChoice();
        setTimeout(() => {
            computerStyle();
        }, 200);
        setTimeout(() => {
            playRound(); // <<<<<<<<<<<<<<<<<<<<<< PLAY ROUND
        }, 1600);
    });
});

RESULT_TEXT.addEventListener('change', () => {
    console.log(RESULT_TEXT.innerText);

})

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

// round per round poiting
function getScore() {
    computerScore = document.querySelectorAll('#computer > div[class~="point"]').length
    humanScore = document.querySelectorAll('#human > div[class~="point"]').length
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
const HAND = [];
window.addEventListener('load', () => {
    HANDS.forEach(hand => {
        HAND.push(hand.hand);
    });
})

// o GOTTA DEFINE HOW I GONNA DO THE GAME OF ROUNDS
// RESET STYLES (REMOVE CLASS OR TOGGLE) AFTER EACH ROUND
// RESET STYLES (REMOVE CLASS OR TOGGLE) AFTER EACH GAME
// HOW GONNA SHOW GAME (SET OF ROUNDS) WON OR LOSE
// PREVENT CHOSING OTHER HAND (BUTTON) BEFORE GAME ENDING
// MORE DEFAULT STYLING (GAME BOARD)
// MORE TRANSITION AND INTERACTION EFFECTS (GAME BOARD)
// MORE DEFAULT STYLING (GAME PAGE)
// MORE TRANSITION AND INTERACTION EFFECTS (GAME PAGE)