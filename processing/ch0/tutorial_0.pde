void setup() {
  size(960, 540);
  background(255);
}

void draw() {
  noStroke();
  fill(random(255));
  ellipse(mouseX, mouseY, random(50), random(50));
}