var car,wall;
var bullet,speed,weight;
var t;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  t=random(22,83);
  wall=createSprite(1500,200,t,height/2)
  wall.shapeColor=color(230,230,230);
  speed=random(223.321);
  weight=random(30,52);
  car.velocityX=speed;
 
}

function draw() {
  background(255,255,255); 
if(hasCollided(bullet,wall)){
 bullet.velocityX=0
  D=0.5*speed*weight*speed/(t*t*t) 
if(D<10){car.shapeColor=color(0,255,0)}
if(D>10){car.shapeColor=color(255,0,0)} 
}
 
  drawSprites();
}
function hasCollided(bullet, wall)
 { bulletRightEdge=bullet.x +bullet.width;
   wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge)
     { return true } return false;
   }