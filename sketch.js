var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 500, 50, 50);
  fixedRect.shapeColor="green"
  movingRect=createSprite(200, 100, 50, 50);
  movingRect.shapeColor="green"
  gameObject1 = createSprite(100,100,50,50)
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50)
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50)
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50)
  gameObject4.shapeColor = "green";

  fixedRect.velocityY=-7;
  movingRect.velocityY=7;
}
function draw() {
  background("black"); 
  gameObject1.x=World.mouseX;
  gameObject1.y=World.mouseY;

  if(isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
bounceOff(movingRect,fixedRect);
  drawSprites();
}
