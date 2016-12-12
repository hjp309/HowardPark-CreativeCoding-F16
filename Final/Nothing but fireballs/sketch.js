//Howard Park
//Creative Coding - Kevin Siwoff
//Nothing but fireballs Final 2/3

var you;
var score = 0;
var fireballCount = 10;
var fireballs = [];
var incfb, decfb;
function setup(){ 
	createCanvas(500, 500);

	you = new avatar();

	fireballs = [];
	for(var i = 0; i < fireballCount; i++){
		fireballs.push(new fireball());
	}

	incfb = createButton("Increase fireballs");
	decfb = createButton("Decrease fireballs");
	incfb.position(270,height);
	decfb.position(90,height);

	incfb.mousePressed(function(){ fireballCount++; });
	decfb.mousePressed(function(){ fireballCount--; });

	frameRate(60);
}

function keyPressed(){
	if(keyCode == ENTER){
		you = new avatar();
		fireballs = [];
		score = 0;
		for(var i = 0; i < fireballCount; i++){
			fireballs.push(new fireball());
		}
	}
}


function avatar(){
	this.x = round(random(500/20))*20;
	this.y = round(random(500/20))*20;
	this.width = 20;
	this.height = 20;
	this.fill = color(360, 155, 155);
	this.speed = 4;
	this.alive = true;
}

function fireball(){
	this.width = 5;
	this.height = 5;
	this.fill = color(360, 0, 0);
	this.x = random(-15, width + 10);
	if(this.x < -5 || this.x > width){
		this.y = random(-15, height + 10);
	}else{
		this.y = random(-15, -5) + (height + 20)*(round(random(1,0)));
	}

	if(this.x < 0){
		this.xspeed = random(1,3);
	}else if(this.x > width){
		this.xspeed = random(-3, -1);
	}else{
		this.xspeed = random(-3, 3);
	}
	if(this.y < 0){	
		this.yspeed = random(1, 3);
	}else if(this.y > height){
		this.yspeed = random(-3, -1);
	}else{
		this.yspeed = random(-3, 3);
	}
}

fireball.prototype = {
	start : function(){
		this.x += this.xspeed;
		this.y += this.yspeed;
	},
	collisionTest : function(){
		if(this.x + this.width > you.x && this.x < you.x + you.width && this.y + this.height > you.y && this.y < you.y + you.height){
			you.alive = false;
		}
		if(!you.alive){
			you.speed = 0;
		}
	}
}

function draw(){
	background(155);
	textSize(20);
	textStyle(BOLD);

	//Check if alive
	if(!you.alive){
		text("You died.", width/2 - 50, height/2 - 10);
		text("Your score is " + score, width/2 - 80, height/2 + 10);
		text("Press ENTER to restart", width/2 - 115, height/2 + 32);
	}else{
		text("Score: " + score, width/2 - 50, 25);
		text("fireballs " + fireballCount, 5, height - 5);
		score++;
	}

	//Draw avatar
	fill(you.fill);
	rect(you.x, you.y, you.width, you.height);

	//Draw fireballs
	for(var i = 0; i < fireballs.length; i++){
		fill(fireballs[i].fill);
		rect(fireballs[i].x, fireballs[i].y, fireballs[i].width, fireballs[i].height);
		//console.log(i);
		//console.log(fireballs[i].x, fireballs[i].y, fireballs[i].xspeed, fireballs[i].yspeed);
		fireballs[i].start();
		fireballs[i].collisionTest();
	}

	//difficulty
	if(frameCount % 100 === 0){
		for(var i = 0; i < fireballCount; i++){
			fireballs.push(new fireball());
		}
	}
	if(frameCount % 1000 === 0){
		fireballCount += 5;
	}
		
	//Controls
	if(keyIsDown(LEFT_ARROW)){
		you.x -= you.speed;
	}
	if(keyIsDown(RIGHT_ARROW)){
		you.x += you.speed;
	}
	if(keyIsDown(UP_ARROW)){
		you.y -= you.speed;
	}if(keyIsDown(DOWN_ARROW)){
		you.y += you.speed;
	}
	//console.log(you.x, you.y);

	//Boundary Logic
	if(you.x < 0){
		you.x += you.speed;
	}
	if(you.x > width - you.width){
		you.x -= you.speed;
	}
	if(you.y < 0){
		you.y += you.speed;
	}
	if(you.y > height - you.height){
		you.y -= you.speed;
	}
}
