
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite(80,300,10,10);
  monkey.addAnimation("monkeyRunning",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(300,330,600,10);
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  obstacleGroup.debug = true;
  monkey.collide(ground);
  obstacles();
  fruits();
  if (monkey.isTouching(FoodGroup)){
    score = score + 1;
    FoodGroup.destroyEach();
  }
  drawSprites();
  if (keyWentDown("space")&&monkey.y >= 161.5){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (monkey.isTouching(obstacleGroup)){
    obstacleGroup.velocityX = 0;
    FoodGroup.velocityX = 0;
  }
}

function obstacles(){
  if (frameCount%100==0){
    obstacle = createSprite(600,310,10,10);
    obstacle.velocityX = -7;
    obstacle.lifetime = 120;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}

function fruits(){
  if (frameCount % 100 == 0){
    fruit = createSprite(600,200,10,10);
    fruit.velocityX = -7;
    fruit.lifetime = 120;
    fruit.addImage("banana",bananaImage);
    fruit.scale = 0.1;
    FoodGroup.add(fruit);
  }
}