var playerChoice = "Rock";

var compChoices = ["Rock", "Paper", "Scissors"];
var compChoice = compChoices[Math.floor(Math.random()*3)];
// Tie
if (compChoice == playerChoice){
    console.log("It's a tie!");
}
// Computer = Paper, Player = Rock
else if (compChoice == "Rock" && playerChoice == "Paper"){
    console.log("You Win!")
}
// Computer = Scissors, Player = Paper
else if (compChoice == "Rock" && playerChoice == "Scissors"){
    console.log("You Lose!")
}

else if (compChoice == "Rock" && playeChoice == "Scissors"){
    console.log("You Lose!")
}

