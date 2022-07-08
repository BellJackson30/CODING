let xPos;
let yPos;
let ySpeed=5
let xSpeed=5
let santa;
let mouseDist
let score=0
function preload(){


santa=loadImage('santaclause.js')
}

function setup() {
  createCanvas(400,400);
  background(0,148,255);
  rectMode(CENTER);

  createCanvas(windowWidth, windowHeight)
xPos= random(windowWidth)
yPos= random(windowHeight)

textAlign(CENTER)





}
function draw(){
fill(36,110,33)
  triangle(400,400,450,100,2,400,)

  fill(9,9,25)
  circle(100,315,40)
  circle(150, 281,45)

  push()
  translate(100, 264);
rotate(degrees(70.5));
rect(0,0,90,45)
  pop()

  fill(color(255,231,0))
  circle(391,20,100)

  line(340,10, 270,40)
 line(340,30, 270,40 )
  line(352,50, 270, 180)
  line(390,70, 270, 180)

  fill(255)
  textSize(50)
  text("Your Score Is " + score, windowWidth/2, 50)
  mouseDist=dist(mouseX, mouseY, xPos, yPos)
  print(mouseDist)



    image(santa ,xPos,yPos,30,30)

    xPos=xPos +xSpeed
    yPos=yPos+ySpeed

    if(xPos>= windowWidth-15 || xPos<=0){
  xSpeed=xSpeed *-1;
    }

    if(yPos>=windowHeight-15 || yPos<=0){

      ySpeed=ySpeed*-1
    }
  if(mouseDist<=15){
    xPos=random(15,windowWidth-15)
    yPos=random(15, windowHeight-15)
  score++
  xSpeed=xSpeed*4
  ySpeed=ySpeed*4
  }



}
function lineBrush(){
  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(200),random(200), random(200))

    line(pmouseX,pmouseY, mouseX, mouseY)
  }







  function windowResized(){

  resizeCanvas(windowWidth,windowHeight)

  }
}
