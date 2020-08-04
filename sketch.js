var wall, thickness;
var bullet,bullet, weight;

function setup() {
  createCanvas(1500,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83); 
  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
   
  bullet = createSprite(50,200,50,35);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

}

function draw() {
  background(225,225,255);  

    if (collided(wall, bullet)) {
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage > 10){
      bullet.shapeColor ="red";
    }
    if(damage < 10){
      bullet.shapeColor = "green";
    }
 }
  drawSprites();
}

