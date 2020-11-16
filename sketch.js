var fixedRect, movingRect, obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(800, 200, 50, 50)
  obj1.shapeColor = "yellow"
  obj2 = createSprite(200, 200, 50, 50)
  obj2.shapeColor = "yellow"


  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
  obj1.velocityX = -5
  obj2.velocityX = 5
}

function draw() {
  background(0,0,0);  

bounceOff(obj1, obj2);

  drawSprites();
}


