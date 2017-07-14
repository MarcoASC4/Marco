function rand(num) {
    // Returns a random integer between 0 an num
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}

//Random Letter
function randLetter() {
 var alphabet = "abcdefghijklmnopqrstuvwxyz";
 return alphabet[rand(alphabet.length)];
}

//Random Word Use Loop to pick 5 random letters
 function randWord() {
     var word = ""
     for (var i = 0; i < 5; i++) {
     word = word + randLetter();
    }
    return word;
 }

 function randSentence() {
     var sentence = "";
    //  USe a loop to pick 5 random words
    for (var i = 0; i < 5; i++) {
        // Pick a word
        sentence = sentence + randWord() + "";
    }
    return sentence;
 }