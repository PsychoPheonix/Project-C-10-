var seaImg
var shipImg1

function preload(){
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

var ship,sea
function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200);
  sea.addImage(seaImg)
  sea.scale=0.4
  ship=createSprite (160,200)
  ship.addAnimation("ship_running",shipImg1)
  ship.scale=0.4

  sea.velocityX=-5
}

function draw() {
  background("blue");
  sea.velocityX=-5
//code to reset the background
if(sea.x < 0){
 sea.x=sea.width/8;
}
  drawSprites()
  
 
}