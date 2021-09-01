var anna
var bg
var john
var Ryan
var elsa
var iglo
var castle


function preload(){
  bg=loadImage("bg.gif");
  an=loadImage("Anna.png");
  boy=loadImage("boy.png");
  boy2=loadImage("boy1.png");
  Frozen=loadImage("Elsa.png");
  ig=loadImage("Igloo.png");
  cs=loadImage("castle.png");
  
}

function setup() {
  createCanvas(1500,900);
  
  anna = createSprite(630,650);
  anna.addImage(an);
  anna.scale = 1.2;
  
  john = createSprite(150,620);
  john.addImage(boy);
  john.scale = 1.2;

  Ryan = createSprite(800,620);
  Ryan.addImage(boy2);
  Ryan.scale = 1;

  elsa = createSprite(400,650);
  elsa.addImage(Frozen);
  elsa.scale = 1.2;

  iglo = createSprite(1200,670);
  iglo.addImage(ig);
  iglo.scale = 1.5;

  castle = createSprite(500,750);
  castle.addImage(cs);
  castle.scale = 0.9;

  

}

function draw() {
  background(bg); 
  drawSprites();
}


        