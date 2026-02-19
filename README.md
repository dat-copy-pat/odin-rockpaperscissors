# odin-rockpaperscissors
The Odin Project Foundations Project: Rock Paper Scissors

This assignment from The Odin Project Foundations course is the first JavaScript project built from scratch in the course.

**Instructions:**

1. Setup structure
    Create repository, blank html and external JS file.

2. Write logic to get computer choice
    Create function getComputerChoice
    Write code for function to randomly return one of these strings: "rock", "paper" or "scissors".
    Use Math.random

3. Write the logic to get human choice
    Create function getHumanChoice
    Write code for function to return one of the valid choices.
    Use prompt()

4. Declare players score variables
    Create global variables humanScore and computerScore, initialized to 0.

5. Write logic for a single round
    Create a function playRound with two parameters - humanChoice and computerChoice - that take human and computer choices as arguments.
    Make humanChoice parameter case-insensitive.
    Write code for function to console.log a string value for round winner announcement (e.g. "You win, Rock beats Scissors" or "Ha,ha, Paper beats rock, you loser!")
    Increment humanScore or computerScore variables based on round winner.


6. Write logic for entire game
    Game must play for 5 rounds.
    Create function playGame
    Move playRound function and score variables to be delcared inside new function
    Play 5 rounds by calling function 5 times. Loops.


***Resist the temptation to add more features, improve interactivity, UX, design and styling, and so on***
