let ballX= 300
let ballY=330

let furby;
let baby;

function preload(){

  furby= loadImage('furby.png')
  baby=loadImage ('dancingbaby2.gif')

}






function setup() {
  createCanvas(windowWidth, windowHeight)
  background( 177,70,100)

  for(let i=0; i <windowWidth;  i=i+10){
    line(i,0,i,windowHeight)
    print(i)
  }
  for(let i=0; i<windowHeight; i=i+10) {
    line(0,i,windowWidth,i)
  }
  for(let i=0; i < 100; i++){
image(baby, random(windowWidth), random(windowHeight/.5), 40, 40)
  }

  image(furby, 200,200,110,110)

}




function draw() {
  




}
