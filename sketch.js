  
//creating objects
  
var rb, r, gb, g, bb, b, pb, p;
  
var bow, bo;
  
var ground1, ground2, gr;
  
var ar;
  
var score = 0;
  
  
function preload() {
  
  //loading images in objects
  
  gr = loadImage ('background0.png');
  
  bo = loadImage ('bow0.png');
  
  r = loadImage ('red_balloon0.png');
  g = loadImage ('green_balloon0.png');
  b = loadImage ('blue_balloon0.png');
  p = loadImage ('pink_balloon0.png');
  
  ar = loadImage ('arrow0.png');
  
} 
  
  
function setup() {
  
  //creating area
  
  createCanvas (580, 483);
  
  //creating sprite for ground and adding ground image
  
  ground1 = createSprite (261, 252.5);
  ground1.addImage (gr);
  ground1.scale = 1.3;
  ground1.velocityX = -5;
  
  ground2 = createSprite (780, 252.5);
  ground2.addImage (gr);
  ground2.scale = 1.3;
  ground2.velocityX = -5;
  
  //creating sprite for bow and adding bow image
  
  bow = createSprite (540, 252.5);
  bow.addImage (bo);
  
  //creating groups for balloons and arrow
  
  rbb = createGroup();
  gbb = createGroup();
  bbb = createGroup();
  pbb = createGroup();
  arrowgroup = createGroup();

  
} 
  
  
function draw() {
  
  //giving background a colour
  
  background ('white');
  
  //making cursor control bow y position
  
  bow.y = mouseY;
  
  if (keyDown ('space') ) {
    
    createArrow();
    
  }
  
  //bursting balloon's when contact with arrow 
  
  if (arrowgroup.isTouching(rbb)){
    
    rbb.destroyEach();
    arrowgroup.destroyEach();
    score = score+1
    
  }
  
  if (arrowgroup.isTouching(bbb)){
    
    bbb.destroyEach();
    arrowgroup.destroyEach();
    score = score+1
    
  }
  
  if (arrowgroup.isTouching(gbb)){
    
    gbb.destroyEach();
    arrowgroup.destroyEach();
    score = score+1
    
  }
  
  if (arrowgroup.isTouching(pbb)){
    
    pbb.destroyEach();
    arrowgroup.destroyEach();
    score = score+1
    
  }
  
  //resetting ground when it crosses its half of width
  
  if (ground1.x < -201) {
    
    ground1.x = 261;
    ground2.x = 780;
    
  }
  
  //giving random positions to balloons
  
  var selectballoon = Math.round (random (1, 4) );
  
  if (World.frameCount % 80 == 0) {
    
    if (selectballoon == 1) {
      
      redballoon();
     
      
    
    } else if (selectballoon == 2) {
      
      greenballoon();
      
     
    
    } else if (selectballoon == 3) {
      
      blueballoon();
      
 
    
    } else {
      
      pinkballoon();
      
 
    
    }
    
    
    
  }
  
  //creating sprites on canvas
  
  drawSprites();
  
  //giving score on canvas
  
  fill ("green");  
  textSize (20);
  text ("Score: " + score, 470, 50);  
  
} 
  
  
function redballoon() {
  
  //creating red balloon and adding it in group
  
  var rb = createSprite (0, Math.round (random (20, 370) )   , 10, 10);
  
  rb.addImage (r);
  rb.velocityX = 2;
  rb.lifetime = 150;
  rb.scale = 0.08;
  
  rbb.add (rb);
  

  
  if (arrowgroup.isTouching(rbb)){
        score = score + 1;      
        rbb.destroyEach();
        arrowgroup.destroyEach();
     }
  
} 
  
  
function greenballoon() {
  
  //creating green balloon and adding it in group
  
  var gb = createSprite (0, Math.round (random (20, 370) )   , 10, 10);
  
  gb.addImage (g);
  gb.velocityX = 2;
  gb.lifetime = 150;
  gb.scale = 0.08;
  
  gbb.add (gb);
    
     if (arrowgroup.isTouching(gbb)){
        score = score + 1;      
        gbb.destroyEach();
        arrowgroup.destroyEach();
     }
  
} 
  
  
function blueballoon() {
  
  //creating blue balloon and adding it in group
  
  var bb = createSprite (0, Math.round (random (20, 370) )   , 10, 10);
  
  bb.addImage (b);
  bb.velocityX = 2;
  bb.lifetime = 150;
  bb.scale = 0.08;
  
  bbb.add (bb);
  
  
       if (arrowgroup.isTouching(bbb)){
        score = score + 1;      
        bbb.destroyEach();
        arrowgroup.destroyEach();
     }
} 
  
  
function pinkballoon() {
  
  //creating pink balloon and adding it in group
  
  var pb = createSprite (0, Math.round (random (20, 370) )   , 10, 10);
  
  pb.addImage (p);
  pb.velocityX = 2;
  pb.lifetime = 150;
  pb.scale = 1;
  
  pbb.add (pb);

  
       if (arrowgroup.isTouching(pbb)){
        score = score + 1;      
        pbb.destroyEach();
        arrowgroup.destroyEach();
      }
} 
  
  
function createArrow() {
  
  //creating arrow and adding it in group
  
  var arrow = createSprite (540, 252.5);
  
  arrow.addImage (ar);
  arrow.scale = 0.25;
  arrow.y = bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 54;
  
  arrowgroup.add (arrow);
  
} 
  