
let angles = [40,40,40,40,40,40,40,40,40];
let rColor;
let gColor;
let bColor;

function setup(){

  createCanvas(windowWidth,windowHeight)
  background(252, 3, 236)
  textAlign(CENTER)
  rColor = random(0,255)
  gColor = random(0,255)
  bColor = random(0,255)
  noLoop();
}


function draw(){
fill(18, 23, 18)
rect(373,255, 80,100)

  fill(255)
  textSize(50)
  text("TAP TO READ YOUR FORTUNE: " , windowWidth/2, 50)
  pieChart(300, angles);

fill(117, 69, 26)
rect(400,280,30,90)


}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {

    fill(random(255),random(255),random(255) );
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)

}
