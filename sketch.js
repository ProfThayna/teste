var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage);
 
}

function draw() {
  background(220);
 
  //pular quando a tecla espaço for pressionada
  if(keyDown('space')){
    trex.velocityY = -10;
  }
  //simular a gravidade
  trex.velocityY = trex.velocityY + 0.5;

  ground.velocityX = -5;

  trex.collide(ground);

  drawSprites();
}
