let imgs =[]

let randomButton

let canvas
let customFont
let namesArray = [
'jon',
'emily',
'bob',
'jessica',
'andrea'
]

let name=0
let randImage=0

function preload(){
for(i=0; i<3; i++) {
  imgs[i]=loadImage(i + '.jpg')
}
customFont=loadFont('Contenderfreeversion-ez596.otf')
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  canvas.style('z-index', '-1')
  canvas.position(0,0)

  randomButton = createButton('Random Image and Name')

  randomButton.mousePressed(randImageName)
  imageMode(CENTER)


}
function randImageName(){
randImage= int(random(imgs.length))
name= int(random(namesArray.length))
}
function draw(){
background(255)
image(imgs[randImage], windowWidth/2, windowHeight/2)
textFont(customFont)
textSize(40)
fill(200,30,100)

text(namesArray[name], windowWidth/2,windowHeight/2)


}
