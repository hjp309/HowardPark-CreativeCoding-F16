//Howard Park
//Creative Coding
//Week 4 Homework

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	background(45, 50, 100);
}

function draw(){
	noStroke();
	fill('#ff6666');
	rect(0, windowHeight/2, windowWidth, windowHeight);
	fill('#990000');
	rect(0, windowHeight - 100, windowWidth, 100);
	//typo in your code here:  should remove 'h'
	fill('#009933');h
	rect(0, 0, windowWidth, windowHeight/2);
	fill('#006600');
	rect(0, 100, windowWidth, windowHeight/2 - 100);
	fill('#993300');
	rect(windowWidth/2 - 50, 50, 100, 100);
	fill('#993300');
	rect(windowWidth/2 - 50, windowHeight - 150, 100, 100);
}
