var speed,weight
var bullet, wall
var thickness , Lbullet , Lwall
var bulletRightEdge, bulletLeftEdge

function setup() {
  createCanvas(1600,400);
  speed=random(5,15)
  weight=random(223,321)
  thickness=random(22,83)
 
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor="white"
  
  bullet = createSprite(50,200,100,25)
  bullet.shapeColor="blue"
  bullet.velocityX = speed
}
function hasCollided(){
    bulletRightedge=bullet.x+bullet.width/2
    wallLeftEdge=wall.x-wall.width/2
    if(bulletRightEdge===wallLeftEdge){
        bullet.velocityX = 0
      return true
    }else{
    return false;
 }
}
  function draw() {
    background(0);  
  //  car.collide(wall)
 
    if (hasCollided()){
       
      bullet.velocityX = 0
       var damage=weight*speed*speed/(thickness*thickness*thickness)
       console.log(damage)
      if(damage<10){
        wall.shapecolor="green"
       // bullet.x = wall.x-wall.width/2
      }
      else if(damage>10){
        wall.shapecolor = "red"
       // bullet.x = wall.x-wall.width/2
      }
  
  }
  drawSprites()
  }
  