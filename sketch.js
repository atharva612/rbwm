
var wall,thickness;
var bullet,speed,Weight;




var deformation;

function setup() {
  createCanvas(800,400);


  thickness=random(22,83);


wall=createSprite(600, 200, thickness,height/2);
bullet=createSprite(20,200,30,10);




  speed=random(55,110);
  Weight=random(410,1500);
  bullet.velocityX=speed;






 var damage= 0.5 * Weight * speed * speed /6/( thickness*thickness*thickness);
}

function draw() {
  background("lightblue");  



if(hasCollided(bullet,wall)){
  bullet.velocity.x=0;
   var damage= 0.5 * Weight * speed * speed /6/( thickness*thickness*thickness);
 
 
   if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

drawSprites();
}


function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
return false;
}



