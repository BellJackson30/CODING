let canvas
let playButton

let modemAudio
let modemSlider

let modemRateSlider

let baby
let babyx=0

let amplitude
function preload(){
modem=laodSound('ModemSound.mp3')
baby-loadImage('dancingbaby2.gif')
}

function setup(){
canvas=createCanvas(windowWidth, windowHeight)
canvas.style('z-index','-1')
canvas.position(0,0)


playButton =createButton('Play Audio')
playButton.mousePressed(audioToggle)
playButton.position(20,20)

modemSlider= createSlider(0,1,1, .01)
modemRateSlider= createSlider(0,3,1, 0.01)
background (0);

amplitude= new p5.Amplitude()

}

function audioToggle(){
  if(modem.isPlaying()){
modem.loop()
playButton.('Pause Audio')
}else{
  modem.pause();
playButton.html('Play Audio')
}
}
function draw(){
modem.rate(modemRateSlider.value())
modem.setVolume(modemSlider.value())

level=amplitude.getLevel();
let size = map(level, 0,1, 0, 900)
print(size)
ellipse(width/2, height/2, size,size)

image(baby, babyx, height/2)

babyX=babyX +2
if(babyX >=windowWidth)

}
