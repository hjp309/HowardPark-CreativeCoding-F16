//Howard Park
//Creative Coding
//Week 3 Homework
//Moire Pattern

function setup(){
	createCanvas(500,500);
}

//Global Variable for speed
var speed = 0;

function draw(){
	background(color(0,0,0));
	
	//Pattern 1
	for(var pat1 = 0; pat1 < 20; pat1++){
		beginShape();
		vertex(100, 0 + pat1*10 + speed);
		vertex(400, 0 + pat1*10 + speed);
		vertex(400, 3 + pat1*10 + speed);
		vertex(100, 3 + pat1*10 + speed);
		endShape();
	}

	//Pattern 2
	for(var pat2 = 0; pat2 < 20; pat2++){
		beginShape();
		vertex(100, 247 + pat2*10 - speed);
		vertex(400, 247 + pat2*10 - speed);
		vertex(400, 250 + pat2*10 - speed);
		vertex(100, 250 + pat2*10 - speed);
		endShape();
	}

	//Reset the animation to starting point if limit reached
	if(speed > 220){
		speed = speed - 220;
	}else{
		speed += 5;
	}
}
