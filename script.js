let computerScore = 0,
    playerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerChoice, computerChoice) {
    if ((playerChoice=='ROCK' && computerChoice=='Scissors') || (playerChoice=='PAPER' && computerChoice=='Rock') || (playerChoice=='SCISSORS' && computerChoice=='Paper')) {
        let player = document.querySelector('.player-score');
        player.innerHTML++;
        playerScore++;
    }
    else {
        let computer = document.querySelector('.computer-score');
        computer.innerHTML++;
        computerScore++;
    }
}

function clearScore() {
    let player = document.querySelector('.player-score');
    player.innerHTML = 0;
    let computer = document.querySelector('.computer-score');
    computer.innerHTML = 0;
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound('ROCK', getComputerChoice());
    if (playerScore==5 || computerScore==5) {
        if (playerScore==5) {
            alert('You won');
        }
        else if (computerScore==5) {
            alert('You lose');
        }
        clearScore();
    }
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound('PAPER', getComputerChoice());
    if (playerScore==5 || computerScore==5) {
        if (playerScore==5) {
            alert('You won');
        }
        else if (computerScore==5) {
            alert('You lose');
        }
        clearScore();
    }
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playRound('SCISSORS', getComputerChoice());
    if (playerScore==5 || computerScore==5) {
        if (playerScore==5) {
            alert('You won');
        }
        else if (computerScore==5) {
            alert('You lose');
        }
        clearScore();
    }
});