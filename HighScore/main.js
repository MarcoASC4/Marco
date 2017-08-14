var compChoices = ["Rock", "Paper", "Scissors"];
var w = 0;
var t = 0;
var l = 0;



function playerRock() {
    $(".remove").remove();
    $("h2").remove();

    var compChoice = compChoices[Math.floor(Math.random() * 3)];

    $(".choice").append("<img class='remove' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/800px-Rock-paper-scissors_%28rock%29.png'>");

    if (compChoice == "Rock") {
        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/800px-Rock-paper-scissors_%28rock%29.png'>");

        t++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> It's a tie!!</h2>");
    }
    else if (compChoice == "Paper") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/800px-Rock-paper-scissors_%28paper%29.png'>");

        l++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> Sorry you lost, paper beats rock!</h2>");
    }
    else if (compChoice == "Scissors") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/800px-Rock-paper-scissors_%28scissors%29.png'>");

        w++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> You won, rock beats scissors!</h2>");
    }
}

function playerPaper() {

    $(".remove").remove();
    $("h2").remove();

    $(".choice").append("<img class='remove' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/800px-Rock-paper-scissors_%28paper%29.png'>");

    var compChoice = compChoices[Math.floor(Math.random() * 3)];

    if (compChoice == "Paper") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/800px-Rock-paper-scissors_%28paper%29.png'>");

        t++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> It's a tie!!</h2>")
    }
    else if (compChoice == "Rock") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/800px-Rock-paper-scissors_%28rock%29.png'>");

        w++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> You won, paper beats rock!</h2>");
    }
    else if (compChoice == "Scissors") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/800px-Rock-paper-scissors_%28scissors%29.png'>");

        l++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> Sorry you lost, scissors beats paper!</h2>");
    }
}

function playerScissors() {

    var compChoice = compChoices[Math.floor(Math.random() * 3)];

    $(".remove").remove();
    $("h2").remove();

    $(".choice").append("<img class='remove' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/800px-Rock-paper-scissors_%28scissors%29.png'>");

    if (compChoice == "Scissors") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/800px-Rock-paper-scissors_%28scissors%29.png'>");

        t++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> It's a tie!!</h2>")
    }
    else if (compChoice == "Rock") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/800px-Rock-paper-scissors_%28rock%29.png'>");

        l++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> Sorry you lost, rock beats scissors!</h2>");
    }
    else if (compChoice == "Paper") {

        $(".choice").append("<img class='remove' id='comp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/800px-Rock-paper-scissors_%28paper%29.png'>");

        w++;

        $(".score").text(" W: " + w + " T: " + t + " L: " + l);

        $(".center").append("<h2> You won, scissors beats paper!</h2>");
    }
}