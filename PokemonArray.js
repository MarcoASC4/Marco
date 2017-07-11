var myPokemonRoster = ["Decidueye", "Vikabolt", "Lycanroc", "Talonflame"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[2];
var RosterSize = myPokemonRoster.length;
console.log(myPokemonRoster);
console.log(firstToFight);
console.log(secondToFight);
console.log(RosterSize);

for (var i = 0; i < 5; i++){
    console.log(myPokemonRoster[i]);
}

for (var i = 3; i > -1; i--){
    console.log(myPokemonRoster[i]);
}