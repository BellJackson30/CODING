let ballX= 300
let ballY=330

let furby;
let baby;

function preload(){

  furby= loadImage('furby.png')
  baby=loadImage ('dancingbaby2.gif')

}






function setup() {

createCanvas(windowWidth,windowHeight)
background( 0, 0, 0)
}

function draw() {
  if (mouseY>windowHeight/2){
    background( 0, 230, 0)
  }else {
    background(230, 0, 0)

    if (mouseY>windowHeight/2){
      furby(50,50)
    }else {
      image(baby,200,200)

    }
  }



ellipse(ballX,ballY, 50, 60)


if(mouseIsPressed==true){
  ballX=windowWidth/2
  ballY=windowHeight/2
}else{
ballX=300
ballY=330
}
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
