var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup() {
  $("body").append("<h1> Welcome to Ogre Fighter v1.0</h1>");

  $("body").append("<p> Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>");

  $("body").append("<h3>STATS</h3><p id='stats'></p>");

  $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");
  
  $('body').append("<div id='ogres'></div>")
  
  updateStats();
}

function updateStats() {
    $("#stats").text("HP: " + hp + "// Gold: " + gold + "// Ogres Slain: " + numberDefeated);

}

function attack() {
    if (hp > 0) {
        if (Math.random() * 100 > gold) {
            gold += 10;
            numberDefeated++;
            $("#ogres").prepend("<p>You won! +10 gold.</p>");
        }else {
            gold--;
            hp--;
            $("#ogres").prepend("<p>You lost! -10 gold.</p>")
        }
        updateStats();
        spawnOgre();
    }
}

function spawnOgre() {
    $("#ogres").prepend("<img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Shrek_%28character%29.png/170px-Shrek_%28character%29.png'>");
}


$(document).ready(setup);
