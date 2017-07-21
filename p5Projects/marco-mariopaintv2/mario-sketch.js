function setup(){
    createCanvas(300, 300);
    background(225);
    noStroke();

    fill(255, 0, 0);
    rect(0, 0, 300, 25);

    fill(0, 255, 0);
    rect(0, 25, 300, 25);

    fill(0, 0, 255);
    rect(0, 50, 300, 25);
}


function mouseDragged() {
  noStroke();
  ellipse(mouseX, mouseY, random(50),random(50));
  rect(mouseX, mouseY, random(50), random(50));
  
  return false;
}

function mousePressed() {
  if (mouseY < 25) {
    color = "red"
  }
}