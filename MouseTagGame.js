let xPos;
let yPos;

let ySpeed=2
let xSpeed=2


let furby;
let baby;
let mouseDist
let score=0
function preload(){

  furby= loadImage('furby.png')
  baby=loadImage ('dancingbaby2.gif')

}
function setup(){

  createCanvas(windowWidth, windowHeight)
xPos= random(windowWidth)
yPos= random(windowHeight)

textAlign(CENTER)

}
xPos=random(15,windowWidth-15)
yPos=random(15, windowHeight-15)

function draw() {
  background(0)
fill(255)
textSize(50)
text("Your Score Is " + score, windowWidth/2, 50)
mouseDist=dist(mouseX, mouseY, xPos, yPos)
print(mouseDist)


  image(furby,xPos,yPos,40,40 )

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
xSpeed=xSpeed*1.2
ySpeed=ySpeed*1.2
}

}
function windowResized(){

resizeCanvas(windowWidth,windowHeight)

}
