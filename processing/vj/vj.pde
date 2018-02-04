import themidibus.*;

MidiBus myBus;
PImage img;

float alpha;
boolean cngAlpha;
boolean fadeMode;

String IMAGE_PATH = "/path/to/file.jpg";

void setup() {
  size(1024, 768);
  noStroke();
  img = loadImage(IMAGE_PATH);
  
  cngAlpha = false;
  fadeMode = false;
  myBus = new MidiBus(this, "SLIDER/KNOB", 0);
}

void draw() {
  background(0);
  tint(255f, alpha);
  image(img, 0, 0);
}

void controllerChange(int channel, int number, int value) {
  //cc[number] = map(value, 0, 127, 0, width - 30);
  if (number != 0) return;
  alpha = (float)value * 2;
  
  
  // Receive a controllerChange
  println("Channel:"+channel);
  println("Number:"+number);
  println("Value:"+value);
}