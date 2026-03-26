/*******************************************************/
// P5.play: Fallingcandy
// candies fall due to gravity
// Written by ???
/*******************************************************/	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {

   cnv = new Canvas(700, 850);
   bucket = new Sprite(350, 800, 120, 20,'k');
   bucket.color = 'blue';
   score = 0;

   candies = new Group();

    console.log("Hello: score + frameCount") ;
} 
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    
    console.log("Hello: score + frameCount") ;

    if (frameCount% 60 ==0);
    candy = new Sprite(random(50,800 ),0, 10, 15,'d');
    candy.vel.y = 4;
    candy.rotationSpeed = 2;
    candies.add (candy);

    bucket.x = mouse.x;
    
    
    
   
   

    
    background('skyblue');
  
    }
    
	

/*******************************************************/
//  END OF APP
/*******************************************************/