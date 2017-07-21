function block (xpos, ypos, boat) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.boat = boat;
    rect(xpos, ypos, 40, 40);
}
var collum = 5;
var row = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var x = 0; x < collum; x++) {
        for (var y = 0; y < row; y++) {
            new block (x*40, y*40, Math.floor(Math.random())).square;
        }
    }
}

function mouseClicked() {
    if (block.boat == 1) {
        consol
    }

}

