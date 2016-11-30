//Howard Park
//Creative Coding - Kevin Siwoff
//Week 10 Assignment

var change, plus, minus, erase, banner, instructions;

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);

	change = createButton('&#9726 / &#9679');
	change.position(20, 80);
	change.mousePressed(changeBrush);

	minus = createButton('-');
	minus.position(90, 80);
	minus.mousePressed(decreaseSize);

	plus = createButton('+');
	plus.position(115, 80);
	plus.mousePressed(increaseSize);

	erase = createButton('Clear board');
	erase.position(160, 80);
	erase.mousePressed(clear);

	banner = createElement('h1','MAKE SOMETHING FABULOUS!');
	instructions = createElement('h3','Mouse clicks to alternate between Square \n and Circle and ALT key to turn it off.');
	banner.position(10, -10);
	instructions.position(10, 30);
}

var brush = 0; //Square or circle?
var paint = 0; //Painting with square or circle?
var shapeSize = 50;
var counter = 0;

function draw(){ //I tried to improve this by keeping the background unchanged, but couldn't figure out a logical way to do it.
	if(brush == 0 && !mouseIsPressed){
		circleBrush();
	}else if (brush == 1 && !mouseIsPressed){
		squareBrush();
	}
	if(mouseIsPressed){
		drawObject();
	}
	console.log(brush);
}

function circleBrush(){
	paint = 0;
	background(45, 50, 100);
	stroke(5);
	noFill();
	ellipse(mouseX, mouseY, shapeSize*2, shapeSize*2);
}

function squareBrush(){
	paint = 1;
	background(45, 50, 100);
	stroke(5);
	noFill();
	beginShape();
	vertex(mouseX, mouseY - shapeSize);
	vertex(mouseX - shapeSize, mouseY);
	vertex(mouseX, mouseY + shapeSize);
	vertex(mouseX + shapeSize, mouseY);
	endShape();
}

function changeBrush(){
	if(brush == 0){
		brush = 1;
	}else{
		brush = 0;
	}
}

function drawObject(){
	if(paint == 0){ //Circle paint
		noStroke();
		for(var timer = 0; timer < 10; timer++){
			if(counter > 360)
				counter = 0;
			fill(counter, 100, 100);
		}
		ellipse(mouseX, mouseY, shapeSize*2, shapeSize*2);
	}

	if(paint == 1){ //Square paint
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

function eraseBoard(){
	background(45, 50, 100);
}

function increaseSize(){ //Controls
	shapeSize += 5;
}

function decreaseSize(){ //Controls
	if(shapeSize < 0){
		shapeSize = 0;
	}
	shapeSize -= 5;
}
