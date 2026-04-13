// get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex];
};

// get the human choice
function getHumanChoice(choice) {
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper"){
        return "paper";
    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";
    }
};
function playGame() {
    // track the scores
    let humanScore = 0;
    let computerScore = 0;

    // arguments for human and computer choices
    function playRound(human, computer) {
        if (human === computer) {
            return "It's a tie!";
        } else if ((human === "rock" && computer === "scissors") || 
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")) {
            humanScore++;
            return "Human wins"
        } else {
            computerScore++;
            return "Computer wins"
        };
    }

    for (let i = 0; i < 5; i++) {
        const roundHumanChoice = getHumanChoice(prompt("Please enter your choice:"));
        const roundComputerChoice = getComputerChoice();
        console.log(playRound(roundHumanChoice, roundComputerChoice));
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}