
let angles = [40,40,40,40,40,40,40,40,40];
let rColor;
let gColor;
let bColor;
let customFont
let name
let fortuneText
let namesArray = [
  '',
  'You trip into a fiery pit and go to hell where you then  meet Bob Duncan (zaddy)',
  'Kanye West will write a diss track about how you smelled bad after seeing you once at Papa Johns Pizzeria',
  'Gordon Ramsay agrees to cook for you but you get food poisoning immediately after, leading to excessive diarehea...',
  'You will stub your toe so hard that you fall into a coma',
  'You will meet your celebrity crush at the beach buuuuut you then get stung by a  jelly fish so they have to pee on you to help  the pain',
  'You will join a boy band but then go solo for the sake of profit',
  'You will turn into a pixie fairy and hang out with Tinker Bell',
  'You will laugh so hard you die where you then go to heaven and see Betty White!!!!!',
  'A zombie apocolypse will apprach within the next 5 days...you wont survive long :(',
  'Those closest to you will stab you in the back by the strike of midnight',
  'You will win the million dollar lottery but then have to pay every baby daddys child support :(',
  'A dark entity is in this room with us... their angry and vengeful...',
  'You will make it to the ripe age of 27 and then die suddenly',
  ' You will fall for a pyramid scheme but then actually get super rich from it',
  'You will become a penguin and live with Bear Grills in an Igloo',

]
let canvas

let colors = []

rotation=0

let festiveSound
let wheelSound

function preload(){
  customFont=loadFont('Contender.otf') 
  ball=loadImage('CyFc.gif')
  jakethedog=loadImage('heart-love.gif')
  festiveSound = loadSound('festive-melody.wav')
  wheelSound = loadSound('wheel-spinning.wav')
}
function setup(){

  canvas = createCanvas(windowWidth,windowHeight)
  canvas.style('z-index', '-1')
  canvas.position(0,0)
  textAlign(CENTER)
  fortuneText = createP('')
  fortuneText.position(10, windowHeight-280)
  //noLoop();
  pieColors();
}

function pieColors(){
  for(let i = 0;i< angles.length; i++ ){
    let red = floor(random(10,255))
    let green = floor(random(10,255))
    let blue = floor(random(10,255))
    colors.push([red, green, blue])
  }
}


function draw(){
  background(252, 3, 236)
  fill(18, 23, 18)
  rect(windowWidth/2.1,windowHeight/2-210, 80,100)
  textFont(customFont)
  fill(255)
  textSize(70)
  text("TAP TO READ YOUR FORTUNE: " , windowWidth/2, 70)
  pieChart(300, angles);
  image(ball, 60, 300,350,350)
  image(jakethedog, 1070, 300, 350, 350)

  fill(117, 69, 26)
  rect(windowWidth/2,windowHeight/2-200,30,90)


  if(mouseIsPressed){
    rotation+=10
  }
  textSize(50)
  fill(69, 252, 8)
  //text(namesArray[1], windowWidth/2,250)

}

function mousePressed() {
  //  loop();
  // rotation=+20
  // name = 0
wheelSound.play()

}

function mouseReleased() {
  //  noLoop();
  name= int(random(1,namesArray.length))
  brk = namesArray[name].split('~')
  join = brk.join('<br/>')
  fortuneText.html(join)
  festiveSound.play()

  if(wheelSound.isPlaying()){
    wheelSound.stop()
  }

}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {

    // fill(random(255),random(255),random(255) );

    fill(colors[i])
    push()
    translate(windowWidth/2,windowHeight/2)
    rotate(radians(rotation))
    arc(
      0,
      0,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    pop()
    lastAngle += radians(angles[i]);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
  background(252, 3, 236)
}
