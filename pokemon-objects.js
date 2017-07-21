var pokemonRoster = [
    {"Name": "Alakazam", "Type": "Psychic", "HP": 55, "DEF": 45, "ATK": 50, "Legend": false},
    {"Name": "Metapod", "Type": "Bug", "HP": 50, "DEF": 55, "ATK": 20, "Legend": false},
    {"Name": "Sandslash", "Type": "Ground", "HP": 75, "DEF": 110, "ATK": 100, "Legend": false},
    {"Name": "Machamp", "Type": "Fighting", "HP": 90, "DEF": 80, "ATK": 130, "Legend": false},
    {"Name": "Hypno", "Type": "Psychic", "HP": 85, "DEF": 70, "ATK": 73, "Legend": false},
    {"Name": "Porygon-z", "Type": "Normal", "HP": 85, "DEF": 70, "ATK": 80, "Legend": false}
]

function printRoster() {
    for (var x = 0; x < pokemonRoster.length; x++) {
        console.log(pokemonRoster[x]);
    }
}
