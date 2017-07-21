function setup() {
    createCanvas(500, 300);
    background(0, 255, 127);

    fill(0, 102, 153);
    text("Please type the sentences below.", 150, 50);


}
var sentence = "How are you my mans?"
function keyTyped() {
    console.log(typed);
    typed == sentence + key;
    if (typed == sentence)
}