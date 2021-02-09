var snake;
var fruit,fruitG;
var tail = [];
var Score = 0;
var start;

function preload(){
  
}

function setup(){
  var canvas = createCanvas(1000,500);
  snake = createSprite(500,250,20,20);
  snake.shapeColor = "green";
  fruit = createSprite(random(0,width),random(0,height),20,20);
  fruit.shapeColor = "red";
}
function draw() {
  background(0,0,0);
  fill("white");
  textSize(20);
  text("SCORE :"+Score,500,25);

  if(snake.isTouching(fruit)){
     fruit.destroy();
     spawnR();
     Score+=1;
  }

  if(keyDown(UP_ARROW)){
     snake.y +=-5;
  }
  if(keyDown(DOWN_ARROW)){
    snake.y += 5;
 }
 if(keyDown(LEFT_ARROW)){
  snake.x +=-5;
 }
if(keyDown(RIGHT_ARROW)){
  snake.x +=5;
}

  drawSprites();
}
function spawnR(){
  fruit = createSprite(random(0,width),random(0,height),20,20);
  fruit.shapeColor = "red";
}