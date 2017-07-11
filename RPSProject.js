var playerChoice = "Rock";

var compChoices = ["Rock", "Paper", "Scissors"];
var compChoice = compChoices[Math.floor(Math.random()*3)];
// Tie
if (compChoice == playerChoice){
    console.log("It's a tie!");
}
// Computer = Rock, Player = Paper
else if (compChoice == "Rock" && playerChoice == "Paper"){
    console.log("You Win! Paper beats Rock!")
}
// Computer = Rock, Player = Scissors
else if (compChoice == "Rock" && playerChoice == "Scissors"){
    console.log("You Lose! Rock beats Scissors!")
}
// Computer = Paper, Player = Rock
else if (compChoice == "Paper" && playerChoice == "Rock"){
    console.log("You Lose! Paper beats Rock")
}
// Computer = Paper, Player = Scissors
else if (compChoice == "Paper" && playerChoice == "Scissors"){
    console.log("You Win! Scissors beats Paper")
}
// Computer = Scissors, Player = Rock
else if (compChoice == "Scissors" && playerChoice == "Rock"){
    console.log("You Win! Rock beats Scissors!")
}
// Computer = Scissors, Player = Paper
else if (compChoice == "Scissors" && playerChoice == "Paper"){
    console.log("You Lose! Scissors beats Paper!")
}

