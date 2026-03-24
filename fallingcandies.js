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
      basket = new Sprite(350, 800, 120, 20, 'k');
      basket.color = 'blue';
      score = 0;
      candy.gravity.x = 5;

      candy = new Sprite(50,100, 10, 15, 'd');
      candy.color = 'red';
      candy.rotationSpeed = 2; 

      
      console.log("hello:score"+ FrameCount) ;
} 
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
      // make a new candy sometimes
    console.log("hello:score"+ FrameCount) ;
    candies = new Sprite(random(10,650), 0, 10, 15, 'd');
    candies.color = 'yellow';
    candies.rotationSpeed = 2;
    basket.x = mouse.x;

   if (candy.collides(bucket))
    candy.remove();
    score++;

    candies = new Sprite(random(10,650), 0, 10, 15, 'd');
    candies.color = 'yellow';
    candies.rotationSpeed = 2;
    basket.x = mouse.x;


    }
    background('skyblue');
	

/*******************************************************/
//  END OF APP
/*******************************************************/