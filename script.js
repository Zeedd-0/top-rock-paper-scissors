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