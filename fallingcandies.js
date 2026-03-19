/*******************************************************/
// P5.play: Fallingcandy
// candies fall due to gravity
// Written by ???
/*******************************************************/
console.log("fallingcandies: ");	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {

	 cnv = new Canvas(700, 850);
      basket = new Sprite(350, 800, 120, 20, 'k');
      basket.color = 'blue';
      score = 10;

      world.gravity.y = 20;
      candy = new Sprite(50,100, 10, 15, 'd');
      candy.color = 'red';
      candy.rotationSpeed = 2; 

	
	
	console.log("hello: score"+frameCount);
    
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
      // make a new candy sometimes
  
    console.log("hello: score"+frameCount);
    candies = new Sprite(random(50,650), 0, 10, 15, 'd');
    candies.color = 'yellow';
    candies.rotationSpeed = 2;
    basket.x = mouse.x;
 

	  
	  
	background('skyblue');
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/