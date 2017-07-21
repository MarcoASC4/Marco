function setup () {
    createCanvas(500, 500);
    background(100);
    rect(100, 100, 50, 50);
    rect(300, 100, 50, 50);
}

var MasterPokemon = [
    ["Luxio", 100, "Wild Charge", "Discharge", "Crunch", "Thunder Fang"],
    ["Slugma", 100, "Eearth Power", "Flamethrower", "Body Slam", "Lava Plume"],
    ["Starly", 100, "Brave Bird", "Take Down", "Aerial Ace", "Wing Attack"],
    ["Lairon", 100, "Double-Edge", "Iron Tail", "Take Down", "Rock Slide"],
    ["Snorlax", 100, "High Horsepower", "Crunch", "Rollout", "Giga Impact"],
    ["Meditite", 100, "High Jump Kick", "Hidden Power", "Force Palm", "Feint"]
];

var user = 0;
var computer = 0;






function turn() {
    if(user == computer) {
        user++;
        console.log("")
    }
}