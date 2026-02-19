
/* Write code for function to randomly return one of these strings: "rock", "paper" or "scissors".
  Generate a random number between 0 and 1   
  IF random number is less than 0.34 return "rock"
  IF random number is less than or equal to 0.67 return "paper"
  ELSE return "scissors" 


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
    Convert input to lowercase.

function getHumanChoice () {
    let humanChoice = prompt("So what's it gonna be? Rock, paper or scissors?");
    return humanChoice.toLowerCase();
    }

    
/*Declare players score variables
    Create global variables humanScore and computerScore, initialized to 0.

let humanScore = 0;
let computerScore = 0;

/* Write logic for a single round
    Create a function playRound with two parameters - humanChoice and computerChoice - that take human and computer choices as arguments.
    Make humanChoice parameter case-insensitive.
    Write code for function to console.log a string value for round winner announcement (e.g. "You win, Rock beats Scissors" or "Ha,ha, Paper beats rock, you loser!")
    Increment humanScore or computerScore variables based on round winner.*/

/* Write logic for entire game
    Game must play for 5 rounds.
    Create function playGame
    Move playRound function and score variables to be delcared inside new function
    Play 5 rounds by calling function 5 times. Loops.
*/