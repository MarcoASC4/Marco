var prompt = require('prompt-sync')();

// Plater starts with $1000
// They're buying items at a store before they go on an adventure.
// They have to spend as much money as possible (i.e. spend all their money)

var money = 1000;
var items = [];

// while the player has money
while(money > 99) {
    console.log("You have $" + money + "left. A tent is $100. Used Yeezys are $500.");
    var n = prompt("Which item do you want to buy?");
    if(answer == "tent") {
        money == money - 100;
        items.push("tent");
        consol.log("You bought a tent!");
    } else if (answer == "Used Yeezys"); {
        money == money - 500;
        items.push("Used Yeezys");
        console.log("You bought used Yeezys!");
    } else {
        console.log("I didn't undertand your answer. Try again!");

    }
}