//Howard Park
//Creative Coding
//Week 4 Exercises

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	noLoop();
}

var h = 0;
function draw(){
	// colorMode(HSB, 360, (mouseX*mouseY)/windowWidth, 100);

	background(45, 50, 100);
	// noStroke();
	// fill(180, 100, 100);
	// rectMode(CENTER);
	// rect(width/2,height/2, 400, 400);

	var colorRange = 50;
	background(45, 50, 100);
	noStroke();
	for(var i = 0; i < 4; i++){
		var randHue = random(h - colorRange, h + colorRange);
		fill(randHue, 100, 100);
		rect(i*width/4, 0, width/4, height);
	}
}

function keyPressed(){
	h = random(360);
	redraw();
}
