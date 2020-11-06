var movingRect,fixRect;
function setup() {
  createCanvas(800,800);
 
  movingRect=createSprite(100,200,40,30);
  movingRect.shapeColor="purple";
  movingRect.debug=true;

  fixRect=createSprite(400,400,50,40);
  fixRect.shapeColor="green";
  fixRect.debug=true;

}

function draw() {
  background("red"); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2&&fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2&&movingRect.y-fixRect.y<movingRect.width/2+fixRect.width/2&&fixRect.y-movingRect.y<fixRect.width/2+movingRect.width/2){
    movingRect.shapeColor="blue";
    fixRect.shapeColor="blue";

  }else{
    movingRect.shapeColor="purple";
    fixRect.shapeColor="green";
  }
  
  drawSprites();
}