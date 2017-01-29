function setup() {
    canvassize = 600;
    createCanvas(canvassize, canvassize);
    x = canvassize/2 ;
    y = canvassize/2 ;
    background(51);
    step = 5;
    stepdiff = 4;
    mX = 0;
    mY = 0;
    mirror = true; // to generate mirror image
}

function draw() {

  stroke(x % 255, y % 255, (x*y) % 255); // %255 part keeps the color changing
  strokeWeight(5);
  point(x, y);
  if (mirror){
    point(y, x);
  }
  // run towards mouse if it is pressed and inside canvas
  if( mouseX < canvassize && mouseY < canvassize && x != mouseX && y!= mouseY && mouseIsPressed) { //

    mX = (mouseX-x)/abs(mouseX-x);
    mY = (mouseY-y)/abs(mouseY-y);
    x = x + ((step-stepdiff)*mX);
    y = y + ((step-stepdiff)*mY);
  }
  var r = floor(random(4));
  switch (r) {
    case 0:
      x = x + step;
      break;
    case 1:
      x = x - step;
      break;
    case 2:
      y = y + step;
      break;
    case 3:
      y = y - step;
      break;
  }
  x = x % canvassize; // so that it stays within the canvas
  y = y % canvassize;
}
