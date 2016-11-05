//Howard Park
//Creative Coding
//Midterm 

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
var colorRange;
var shapeSize = 50;
var counter = 0;

function draw(){
	if(mode % 2 == 0 && mode > 0){ //Polk-a-dot On
		colorRange = random(360);
		noStroke();
		for(var timer = 0; timer < 10; timer++){
			if(counter > 360)
				counter = 0;
			fill(counter, 100, 100);
		}
		ellipse(mouseX, mouseY, shapeSize*2, shapeSize*2);
	}

	if(mode % 2 != 0){ //Confetti On
		colorRange = random(360);
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
	counter++;
}

function mouseReleased(){ //Switch modes
	mode += 1;
	console.log(mode); //Documentation of modes in case of error
}

function keyPressed(){ //Turn it off
	if(keyCode === UP_ARROW)
		shapeSize += 5;
	else if (keyCode === DOWN_ARROW)
		shapeSize -= 5;
		if(shapeSize < 0)
			shapeSize = 0;
	else if (keyCode === ALT)
		mode = 0;
}