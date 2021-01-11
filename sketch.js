var player, playerImage,mrsmiller, mrsmillerimg;
var obstacleGroup;
var obstacle1, obstacle2_1, obstacle2_2, obstacle2, obstacle3;
var obstacle1Image, obstacle2Animation, obstacle3Image;
var obstacleGroup;
var score = 0;
var state   = "play";


function preload(){
obstacle1Image = loadImage("Obstacle1.png")
  playerImage = loadImage("Player.png")
  obstacle2Animation = loadAnimation("obstacle2_1.png","obstacle2_2.png");
  obstacle3Image = loadImage("obstacle3.png")
  mrsmillerimg = loadImage("Screenshot 2021-01-11 at 1.03.20 PM.png")
  
}

function setup() {
  createCanvas(600,600)
  player = createSprite(300,70,20,20)
  player.addImage(playerImage)
  
  mrsmiller = createSprite(300,450)
  mrsmiller.addImage(mrsmillerimg)
  obstacleGroup = new Group();
  spawnObject();
 
}

function draw() {
  background("white");
  if(state === "play"){
  text("Score: "+score,500,20)
 drawSprites();
  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
  }
  spawnObject();
  score = score + 1;
  if(player.isTouching(obstacleGroup)){
    state = "end"
  }
  }
  else if(state === "end"){
    text("Game Over! Press space to restart. Your final score was "+score+".",200,300)
    if(keyDown("space")){
      state = "play";
      obstacleGroup.destroyEach()
      score = 0;
    }
  }
}
function spawnObject(){
  if (frameCount%20 === 0){
    var decider = Math.round(random(1,3));
    switch(decider){
        case 1:
        obstacle1 = createSprite(Math.round(random(20,580)),600,20,20)
        obstacle1.addImage(obstacle1Image)
        obstacle1.velocityY = -8;
        obstacleGroup.add(obstacle1)
        
        break;
        case 2:
        obstacle2 = createSprite(Math.round(random(20,580)),600,20,20);
        obstacle2.addAnimation("obstacle2_1.png","obstacle2_2.png")
        obstacle2.velocityY = -8;
        obstacleGroup.add(obstacle2)
        break;
      case 3: 
        obstacle3 =  createSprite(Math.round(random(20,580)),600,20,20)
        obstacle3.addImage(obstacle3Image);
        obstacle3.velocityY = -8;
        obstacleGroup.add(obstacle3);
    }
    
  }
}