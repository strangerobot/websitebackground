
function setup()
{
createCanvas(windowWidth,windowHeight);
}

function draw()
{
noStroke();
 ellipse(50,50,mouseX,mouseY);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
