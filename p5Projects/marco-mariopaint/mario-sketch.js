function setup(){
    createCanvas(300, 300);
    background(245);
}

function mouseDragged() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(mouseX, mouseY, random(50),random(50));
  rect(mouseX, mouseY, random(50), random(50));
  return false;
}