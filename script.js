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
function getHumanChoice(roundChoice) {
        let input = roundChoice.toLowerCase().trim();
        return HAND.indexOf(input);
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
            result = `You won! ${humanChoice} beats ${computerChoice}!`;
            break;
        case -1:
            result = `You lost! ${humanChoice} loses to ${computerChoice}!`;
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
            humanScore ++;
            HUMAN_BOARD[HUMAN_BOARD.length - humanScore].classList.add('human-point');
            break;
        case -1:
            computerScore ++
            COMPUTER_BOARD[computerScore - 1].classList.add('computer-point');
            break;
    };
}


// test game winner
function testGameWinner() {
    playRound();
    if (humanScore === REQUIRED_WINS) {
        MAIN_SECTION.classList.add('human-win');
        RESULT_TEXT.innerText = 'YOU WON!';
    } else if (computerScore === REQUIRED_WINS) {
        MAIN_SECTION.classList.add('computer-win');
        RESULT_TEXT.innerText = 'YOU LOST!';
    } else {
        return 0;
    };
    return 1;
}

// ending round
function endRound() {
    RESULT_TEXT.innerText = '';
    choice.classList.remove('selected', 'computer-choice');
    choice.innerText = '';
    SELECTIONS.forEach(selection => {
        selection.classList.remove('selected', 'human-choice');
    });
}


// ending game
function endGame() {
    MAIN_SECTION.classList.remove('computer-win', 'human-win');
    RESULT_TEXT.innerText = '';
    COMPUTER_BOARD.forEach((div) => {
        div.classList.remove('computer-point');
    });
    HUMAN_BOARD.forEach((div) => {
        div.classList.remove('human-point');
    });
}


// play round
function playRound() {
    const ROUND_POINT = gameLogic();
    roundResultText(ROUND_POINT);
    scoreRound(ROUND_POINT);
    setTimeout(() => {
        endRound();
    }, 1.0 * 1000);
}

// play game with roundMAx rounds
function playGame() {
    if (testGameWinner() === 1) {
        humanScore = 0;
        computerScore = 0;
        setTimeout(() => {
            endGame(),
            GAME_PAGE.classList.remove('invisible')
     }, 3.0 * 1000);
    };
}


// ----------------------------------------------------------------//
// INTERACTION
// global variables
const MAIN_SECTION = document.querySelector('#main-section');
const COMPUTER_BOARD = document.querySelectorAll('#computer > div');
const HUMAN_BOARD = document.querySelectorAll('#human > div');
const SELECTIONS = document.querySelectorAll('#humanPlay > button');
let choice = document.querySelector('#computerPlay > .choice');
const RESULT_TEXT = document.querySelector('#text');
const PLAY_BTN = document.querySelector('#play-div');
const GAME_PAGE = document.querySelector('#frontpage-section');

// events
window.addEventListener('load', () => {
    HANDS.forEach(hand => {
        HAND.push(hand.hand);
    });
})

PLAY_BTN.addEventListener('click', (e) => {
    GAME_PAGE.classList.add('invisible');
})

SELECTIONS.forEach(selection => {
    selection.addEventListener('click', (e) => {
        selectStyle(e);
        humanChoice = getHumanChoice(e.target.innerText);
        computerChoice = getComputerChoice();
        setTimeout(() => {
            computerStyle();
        }, 0.2 * 1000);
        setTimeout(() => {
            playGame();
        }, 1.6 * 1000);
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
    choice.classList.add('selected');
    setTimeout(() => {
        choice.classList.add('computer-choice');
        choice.innerText = HAND[computerChoice];
    }, 0.8 * 1000);
};


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

// o GOTTA DEFINE HOW I GONNA DO THE GAME OF ROUNDS
// o RESET STYLES (REMOVE CLASS OR TOGGLE) AFTER EACH ROUND
// o RESET STYLES (REMOVE CLASS OR TOGGLE) AFTER EACH GAME
// o HOW GONNA SHOW GAME (SET OF ROUNDS) WON OR LOSE
// PREVENT CHOSING OTHER HAND (BUTTON) BEFORE GAME ENDING
// o MORE DEFAULT STYLING (GAME BOARD)
// o MORE DEFAULT STYLING (GAME PAGE)
// MORE TRANSITION AND INTERACTION EFFECTS (GAME BOARD)
// MORE TRANSITION AND INTERACTION EFFECTS (GAME PAGE)