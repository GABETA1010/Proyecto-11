var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb;
var bombImg;
var energyDrink;
var energyDrinkImg;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("jakeRunning",boyImg);
  

leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;


bomb = createSprite(280,120,30,30);
bomb.scale = 0.10;
bomb.addImage(bombImg);


energyDrink = createSprite(130,0,30,30);
energyDrink.scale = 0.10;
energyDrink.addImage(energyDrinkImg);

}

function draw() {
  background(0);
  path.velocityY = 4;
  bomb.velocityY = 1; 
  energyDrink.velocityY = 1; 

  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  if (boy.collide(bomb)){
  boy.destroy();
  }

  if (boy.collide(energyDrink)){
  path.velocityY = 6; 
  }

  drawSprites();
}
