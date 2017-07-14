var charizard = ["Blaze", 266, false, ["Fire", "Charizard"]];
var charizardObject = {
    "attack": "Blaze",
    "HP": 266,
    "legendary": false,
    "type": ["Fire", "Flying"] 
};

var yeezysObject = {
    "Brand": "Adidas",
    "Model": "Yeezy Boost 350",
    "Color": "Turtledove",
    "Size": "9",
    "Price": "$3200",
    "Designrer": "Kanye West",
    "Most Famous Weare": "Baku from Boneless Pizza"
};

function Shoe(brand, model) {
    this.brand = brand;
    this.model = model;
}
var boosts = new Shoe("Yeezy Boost 350");
var stans = new Shoe("Adidas", "Stan Smiths");

function Superhero(heroName, realName, superpower) {
    this.heroName = heroName;
    this.realname = realName;
    this.superpower = superpower;
    this.talk = function() {
        console.log("Hi, I'm " + heroName);
    }
}

var superman = new Superhero("Superman", "Clark Kent", ["Flying", "Super Strenght"]);
var spiderman = new Superhero("Spider Man", "Peter Parker", ["Spidey Sense", "Web-sibling", "Wall Climbing", "Super Strenght"]);

