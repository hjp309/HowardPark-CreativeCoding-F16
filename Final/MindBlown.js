//Howard Park
//Creative Coding - Kevin Siwoff
//Week 8 Assignment

var ono = [];
var particleArray = [];
var maxOno = 0;
var input, button;

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 150, 100);
	input = createInput();
  	input.position(20, 15);
  	button = createButton('Submit');
  	button.position(200, 15);
  	button.mousePressed(inputText);
}

function inputText(){
	console.log(maxOno);
	if(maxOno === 6){
		for(var i = 0; i < 20; i++){
			//console.log(round(random(5)));
			particleArray.push(new Spark(ono[round(random(5))]));
		}
		//console.log(particleArray);
	}else{
		ono.push(input.value());
		//console.log(ono);
	}
	maxOno += 1;

}

function Spark(onoText){
	this.size = round(random(5,90));
	this.color = color(random(360), 150 + random(210), 100 + random(260));
	this.text = onoText;
	//console.log(this.text);
	this.x = mouseX - 100;
	this.y = mouseY;
	this.xspeed = round(random(-10, 10));
	this.speed = round(random(-10, 10));
}

Spark.prototype = {
	explosion : function() {
		if(this.xspeed == 0 || this.speed == 0){
			this.xpseed = 5;
			this.speed = -5;
		}
		this.x += this.xspeed*1.2;
		this.y += this.speed*1.2;
	}
}

function draw(){
	background(55, 50, 150);
	for(var i = 0; i < particleArray.length; i++){
		fill(particleArray[i].color);
		textSize(particleArray[i].size);
		text(particleArray[i].text, particleArray[i].x, particleArray[i].y);
		particleArray[i].explosion();
	}
	textSize(15);
	if(maxOno < 6){
		text("You have " + maxOno + " thoughts.", 22, 53);
		textSize(70);
		textStyle(BOLD);
		fill('#000000');
		text("            TYPE IN 6 THOUGHTS \n and turn them into an EXPLOSION!", windowWidth/2 - 600, windowHeight/2 - 70);
	}else{
		text("BOOM!", 22, 53);
	}
	
}

function mouseReleased(){
	//console.log("being pressed");
	if(maxOno >= 6){
		for(var i = 0; i < 20; i++){
			particleArray.push(new Spark(ono[round(random(5))]));
		}
		for(var i = 0; i < particleArray.length; i++){
			fill(particleArray[i].color);
			textSize(particleArray[i].size);
			text(particleArray[i].text, particleArray[i].x, particleArray[i].y);
			particleArray[i].explosion();
		}
	}
	if(particleArray.length > 1500){
		particleArray = [];
	}
}
