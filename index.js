// state
let humanScore = 0;
let computerScore = 0;
let isGameActive = false;
let round = 0;

// DOM selections
const rockBtn = document.getElementById('btn01');
const paperBtn = document.getElementById('btn02');
const scissorsBtn = document.getElementById('btn03');
const startBtn = document.getElementById('startBtn');
const textResult = document.createElement('h3');
const grid = document.querySelector('.result');
const computerScoreUpdate = document.querySelector('.computer h3');
const humanScoreUpdate = document.querySelector('.human h3');
const computerPick = document.createElement('h4');
const computerBox = document.querySelector('.computer'); 

function updateUI() {
    rockBtn.classList.toggle('disable', !isGameActive);
    paperBtn.classList.toggle('disable', !isGameActive);
    scissorsBtn.classList.toggle('disable', !isGameActive);
}

// get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex];
};

function getComputerPick(choice) {
    // computerPick.textContent = getComputerChoice();
    // computerBox.append(computerPick);
    // console.log(computerPick);
    let iconHTML;
    if (choice === "rock") {
        iconHTML = '<i class="far fa-hand-rock"></i> ROCK';
    } else if (choice === "paper") {
        iconHTML = '<i class="far fa-hand-paper"></i> PAPER';
    } else {
        iconHTML = '<i class="far fa-hand-scissors"></i> SCISSORS'
    }

    return iconHTML;
}
const compIcon = getComputerPick();
function getHumanChoice(choice) {
    return choice;
};

function endGame() {
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
    confetti({
        particleCount: 550,
        spread: 100,
        origin: { y: 0.7 }
    });
}

// arguments for human and computer choices
function playRound(human, computer) {

    if (human === computer) {
        textResult.textContent = "It's a tie!";
        grid.append(textResult);
        return "It's a tie!";
    } else if ((human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")) {
        humanScore++;
        humanScoreUpdate.textContent = humanScore;
        textResult.textContent = "Human wins!";
        grid.append(textResult);
        return "Human wins"
    } else {
        computerScore++;
        computerScoreUpdate.textContent = computerScore;
        textResult.textContent = "Computer wins!";
        grid.append(textResult);
        humanScoreUpdate.append()
        return "Computer wins"
    };
}

// update once load
updateUI();

// start the game 
startBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    humanScoreUpdate.textContent = humanScore;
    computerScoreUpdate.textContent = computerScore;
    grid.append(textResult);
    isGameActive = true;
    updateUI();
    textResult.textContent = "Set, Go!";
    grid.append(textResult);
    computerPick.innerHTML = "";
    computerPick.classList.remove('border');
    computerBox.append(computerPick);
});

// get the human choice
rockBtn.addEventListener("click", () => {
    const humanChoice = getHumanChoice("rock");
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    const computerIcon = getComputerPick(computerChoice);
    computerPick.innerHTML = computerIcon;
    computerPick.classList.add('border');
    computerBox.append(computerPick);
    round++;
    if ((humanScore === 3) || (computerScore === 3)) {
        isGameActive = false;
        updateUI();
        endGame();
    };
});
paperBtn.addEventListener("click", () => {
    const humanChoice = getHumanChoice('paper');
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    const computerIcon = getComputerPick(computerChoice);
    computerPick.innerHTML = computerIcon;
    computerPick.classList.add('border');
    computerBox.append(computerPick);
    round++;
    if ((humanScore === 3) || (computerScore === 3)) {
        isGameActive = false;
        updateUI();
        endGame();
    };
});
scissorsBtn.addEventListener("click", () => {
    const humanChoice = getHumanChoice('scissors');
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    const computerIcon = getComputerPick(computerChoice);
    computerPick.innerHTML = computerIcon;
    computerPick.classList.add('border');
    computerBox.append(computerPick);
    round++;
    if ((humanScore === 3) || (computerScore === 3)) {
        isGameActive = false;
        updateUI();
        endGame();
    };
});