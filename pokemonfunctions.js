
// Letter Randomizer
var lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
function randLetter(lettersArray) {
var resultLetter = lettersArray[Math.floor(Math.random()*lettersArray.length)];
return resultLetter;
};

Console.log(resultLetter);