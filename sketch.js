
function preload(){
  rex=loadAnimation("trex1.png","trex3.png","trex4.png")
  grounds=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(60,180,10,5)
  trex.addAnimation("sprint",rex)
  trex.scale=0.5
  ground=createSprite(300,180,600,20)
  ground.addImage(grounds)
}

function draw(){
  background("lightgrey")
  trex.collide(ground)
  if(keyDown("space")){
    trex.velocityY=-5
  }
  trex.velocityY=trex.velocityY+0.2
  drawSprites()
}
