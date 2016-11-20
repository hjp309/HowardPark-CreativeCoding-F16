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
		spark = new Spark();
		particleArray.push(spark);
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