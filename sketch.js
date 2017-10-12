function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
 // frameRate(10);
  background(1);
}

function draw() {
  translate(width/2,height/2);
  noFill();
  
  stroke(lerpColor(color('#fc00ff'), color('#00dbde'), frameCount/90));
  //bezier(0,250,0,250,250*cos(frameCount*4),-250*sin(frameCount*4),250*cos(frameCount*4),-250*sin(frameCount*4));
  bezier(0,140,0,0,0,0,140*cos(frameCount*4),-140*sin(frameCount*4));

  rotate(frameCount*60);
  
  // rect(-40,0,100,100);
  
  // // rotate(frameCount*10);
  // stroke(lerpColor(color('#fc00ff'), color('#00dbde'), frameCount/60));
   //ellipse(100,0,200,200);


  if (frameCount == 43) {
    noLoop();
  }

}
