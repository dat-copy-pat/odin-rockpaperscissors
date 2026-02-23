/*Declare players score variables
    Create global variables humanScore and computerScore, initialized to 0.

let humanScore = 0;
let computerScore = 0;

/* Write code for function to randomly return one of these strings: "rock", "paper" or "scissors".
  Generate a random number between 0 and 1   
  IF random number is less than 0.34 return "rock"
  IF random number is less than or equal to 0.67 return "paper"
  ELSE return "scissors" */


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Write the logic to get human choice
    Define function without parameters. Use prompt() to get user choice.
    Convert input to lowercase. */

function getHumanChoice () {
    let humanChoice = prompt("So what's it gonna be? Rock, paper or scissors?");
    // Validate input
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("That's not an option, dude. Choose between 'rock', 'paper', or 'scissors':");
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
    }
  
/* Write logic for a single round
    Create a function playRound with two parameters - humanChoice and computerChoice - that take human and computer choices as arguments.
    Write code for function to console.log a string value for round winner announcement (e.g. "You win, Rock beats Scissors" or "Ha,ha, Paper beats rock, you loser!")
    Increment humanScore or computerScore variables based on round winner.*/

/* Write logic for entire game
    Game must play for 5 rounds.
    Create function playGame
    Move playRound function and score variables to be declared inside new function
    Play 5 rounds by calling function 5 times. Loops.
*/
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        let message = "";

        if (humanChoice === computerChoice) {
            message = "It's a tie!";
        } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            message = `You win, ${humanChoice} beats ${computerChoice}!`;
            humanScore++;
        } else {
            message = `Ha, ha, ${computerChoice} beats ${humanChoice}, you loser!`;
            computerScore++;
        }
        console.log(message);
    }
    

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    const finalMessage = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    console.log(finalMessage);
}

// Start the game when page loads
playGame();