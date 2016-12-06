/**
* Kevin's comments:  Very cool!  I like the pop art aesthetic especially with the text and the particle system behind it.
It reminds me of Roy Lichtenstein: https://www.moma.org/collection/works/65792?locale=en
Think about how you might expand on this sketch one of your final project submissions.  Perhaps you could combine the Pop art
aesthetic with fly-by graphics in the same way you are doing with "explosion".  When a user clicks on the work, they could flip 
through different animations and words.  Here's a potential onomotopoetic word list you could work with:
- Smack
- Shhh
- Glug
- Umph
- Hiss
- Ouch
- Zap
- Floomp
- Clang
- Klonk
- Crack
- Kapow
- Tick
You could also generate these words algorithmically using RiTa.js
*/
//Howard Park
//Creative Coding - Kevin Siwoff
//Week 8 Assignment

function Spark(){
	this.size = 50;
	this.color = color(random(360), random(360), random(360));
	this.x = 250;
	this.y = 250;
	this.xspeed = round(random(-10, 10));
	this.speed = round(random(-10, 10));
}

Spark.prototype = {
	constructor : Spark,
	explosion : function() {
		this.x += this.xspeed;
		this.y += this.speed;
	}
}

var spark;
var particleArray = [];
function setup(){
	createCanvas(500, 500);
	for(var i = 0; i < 40; i++){
		//technically correct, but you could combine this into a single line like:
		//particleArray.push(new Spark());
		particleArray.push(new Spark());
	}
}

function draw(){
	background(55, 50, 150);
	for(var i = 0; i < particleArray.length; i++){
		fill(particleArray[i].color);
		ellipse(particleArray[i].x, particleArray[i].y, particleArray[i].size, particleArray[i].size);
		particleArray[i].explosion();
	}
	textSize(50);
	text("EXPLOSION!", 100, 270);
}

//you could add a mousePressed handler to explode the Sparks on each click of the mouse.
