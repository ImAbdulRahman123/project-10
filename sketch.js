var ship,ship_running,edges;
var sea_image;
var sea;
function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,20);
  sea.addImage("w",sea_image);
 ship=createSprite(200,160,20,50);
 ship.addAnimation("r",ship_running);
 ship.scale=0.5;

}
function draw() {
  background("blue");
 drawSprites();
 sea.velocityX=-2;
}