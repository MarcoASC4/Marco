var myArray = [["Name:", "Charizard"], ["Type:", "Fire"],["HP:", 200], ["ATK:", 120], ["DEF", 150], ["Legendary;", "false"]];

for (var x = 0; x < myArray.length; x++) {
    for (var i = 0; i < myArray[x].length; i++){
    console.log(myArray[x][i]);
    }
}