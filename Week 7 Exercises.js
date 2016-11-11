//Howard Park
//Creative Coding - Kevin Siwoff
//Week 7 Exercises

function setup(){
	createCanvas(1000, 600);
}
//------- Exercise 1 variables -----------
// var y = 550;
// var yspeed = 5.0;

//------- Exercise 2 variables -----------
var x = 0;
var y = 0;

function draw(){
	//------- Exercise 1 -----------
	// background(45, 50, 100);
	// if(y < -50 || y < mouseY + 50 || y > 550){
	// 	yspeed = yspeed * -1;
	// }
	// ellipse(width/2, y, 100, 100)
	// y = y - yspeed;

	//------- Exercise 2 -----------
	x = cos(frameCount/10) * 50;
	console.log(x);
	ellipse(x + (width/2), y, 50, 50);
	y += 5;
	y = y % height;
}
