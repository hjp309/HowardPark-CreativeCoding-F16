/**
** Kevin's comments:  Really nice work here!  I especially like the use of mouse and keyboard events to change drawing mode.
I would love to see you expand on a sketch like this in the future, perhaps incorporating custom brushes beyond the circle and rectangle.
Consider what shapes you would need to combine in order to replicate brushes as seen in photoshop.  
Some small code-related comments inline.
**/
//Howard Park
//Creative Coding - Kevin Siwoff
//Midterm 
//11-4-2016

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	background(45, 50, 100);
	textSize(30);
	textStyle(BOLD);
	fill(255, 155, 50);
	text('MAKE SOMETHING FABULOUS!', 30, 40);
	textSize(15);
	text('Mouse clicks to alternate between Square', 30, 60);
	text('and Circle and ALT key to turn it off.', 30, 75);
}

var mode = 0;
var shapeSize = 50;
var counter = 0;

function draw(){
	if(mode % 2 == 0 && mode > 0){ //Polk-a-dot On
		noStroke();
		for(var timer = 0; timer < 10; timer++){
			if(counter > 360)
				counter = 0;
			fill(counter, 100, 100);
		}
		ellipse(mouseX, mouseY, shapeSize*2, shapeSize*2);
	}

	if(mode % 2 != 0){ //Confetti On
		noStroke();
		for(var timer = 0; timer < 10; timer++){
			if(counter > 360)
				counter = 0;
			fill(counter, 100, 100);
		}
		beginShape();
		vertex(mouseX + shapeSize, mouseY);
		vertex(mouseX, mouseY + shapeSize);
		vertex(mouseX - shapeSize, mouseY);
		vertex(mouseX, mouseY - shapeSize);
		endShape();
	}
	counter++; //Counter to change hue.
}

function mouseReleased(){ //Switch modes
	mode += 1;
	console.log(mode); //Documentation of modes in case of error
}

function keyPressed(){ //Controls
	//while technically single line conditionals without brackets will work,
	//I strongly recommend using curly brackets whenever you use if and else, so that you remove any chance for bugs to slip in.
	//it may be annoying to write extra curly's but js will basically try to run anything you type, and it's better for you to be 
	//overly verbose than generate runtime errors.
	if(keyCode === UP_ARROW)
		shapeSize += 5;
	else if (keyCode === DOWN_ARROW)
		shapeSize -= 5;
		if(shapeSize < 0)
			shapeSize = 0;
	else if (keyCode === ALT)
		mode = 0;
}
