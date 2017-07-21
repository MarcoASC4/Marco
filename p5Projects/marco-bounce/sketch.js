function setup() {
    createCanvas(500,500);
    ellipseMode(CENTER);
}
var x = 0;
function draw() {
    console.log(x);
    background(255, 99, 71);
    ellipse(x, 150, 100);
    x++;

    // while (x == 500) {
    //     x--;
    // }
}