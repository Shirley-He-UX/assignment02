function setup() {  createCanvas(500, 500);  background('#29323c');  angleMode(DEGREES);  frameRate(60)  }function draw() {  translate(width/2,height/2);  stroke(lerpColor(color('#2196f3'), color('#f44336'), frameCount/60));  rotate(frameCount*9);  line(100,0,100*cos(frameCount*6),-100*sin(frameCount*6));    // noFill();    // rotate(frameCount*20);  // stroke(lerpColor(color('#fc00ff'), color('#00dbde'), frameCount/80));  // rect(220,0,300,500);  if (frameCount == 60) {    noLoop();  }}