
var monkey , monkey_running
var bananasGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(80,310,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  //monkey.velocityX = 2;
  
  ground = createSprite(400,310,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
  bananasGroup = new Group();
  

}


function draw() {
 
background("white");
drawSprites();
  
score = score + Math.round(getFrameRate()/60);
  
  if(ground.x<200){
    ground.x = ground.width / 2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }

monkey.velocityY = monkey.velocityY + 0.8 ;
  
monkey.collide(ground);
  
drawSprites(); 
//console.log(frameCount);
spawnBananas(frameCount);
spawnObstacles(frameCount);
text("Score: " + score, 25, 75);
}                  




function spawnBananas(frameCount){
if(frameCount % 80 === 0){
  banana = createSprite(300,165,10,10);
  banana.addImage("food", bananaImage)
  banana.scale = 0.1;
  banana.velocityX = -4;
  
  banana.lifetime = 200;
  banana.y = Math.round(random(100,300));

}
}

function spawnObstacles(frameCount){
  if(frameCount % 300  === 0){
  obstacle = createSprite(600,265,20,20);
  obstacle.addImage("obs",obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -4;
    
    obstacle.lifetime = 200;
  }
}


  







