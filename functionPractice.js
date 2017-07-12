// TASK
// Creat a rand() function
// Takes a number
// Returns a random number between 0 and that number

// PSEUDOCODE
// multiply Math.random() by the give number
// remove the decimal part
// return the remaining integer

function rand(num) {
    // Returns a random integer between 0 an num
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}
