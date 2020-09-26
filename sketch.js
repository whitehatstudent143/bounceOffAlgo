
var o1,o2,edges;
function setup() {
  createCanvas(1200,800);
  o1 = createSprite(650, 400, 50, 80);
  o2= createSprite(500, 400, 20, 80);
  o1.debug=true;
  o2.debug=true;


  o2.velocityX=3;
  o1.velocityX=-4;
}

function draw() {
  background(0,0,0);  
    
  
 // console.log(movingRect.x-fixedRect.x);
edges=createEdgeSprites();
//o1.bounceOff(edges);
//o2.bounceOff(edges);
 bounceOff(o1,o2)
//console.log(fixedRect.x-movingRect.x);

  drawSprites();
}


