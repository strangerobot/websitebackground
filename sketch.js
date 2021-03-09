let pointarray=[[1,2]];
let i=0;

function setup()
{
createCanvas(windowWidth,windowHeight);
frameRate(240);


}

function draw()
{

noStroke();
fill(0,0);
pointarray[i]=[mouseX,mouseY];
strokeWeight(3);
stroke(237, 34, 93);
beginShape();

for(j=0;j<i;j++)
{

  vertex(pointarray[j][0],pointarray[j][1]);
  console.log(pointarray);
}
endShape();

i++;

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
