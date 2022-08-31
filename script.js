function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerChoice, computerChoice) {
    if ((playerChoice=="ROCK" && computerChoice=="Scissors") || (playerChoice=="PAPER" && computerChoice=="Rock") || (playerChoice=="SCISSORS" && computerChoice=="Paper")) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}

for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Enter rock, paper, or scrissors:");
    let capitalizedChoice = playerChoice.toUpperCase();
    let computerChoice = getComputerChoice();
    playRound(capitalizedChoice, computerChoice);
}
