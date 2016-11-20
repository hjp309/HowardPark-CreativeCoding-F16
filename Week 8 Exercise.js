//Howard Park
//Creative Coding - Kevin Siwoff
//Week 8 Exercises

function setup(){
	background(155, 50, 50);
	createCanvas(500, 500);
	frameRate(2);
}

var count = 0;

function draw(){
	var circleRadii = [];
	for(var i = 0; i < 60; i++){
		circleRadii.push(20*round(random(60)));
	}
	noFill();
	for(var t = 0; t < circleRadii.length; t++){
		console.log(circleRadii[t]);
		ellipse(width/2, height/2, circleRadii[t], circleRadii[t]);
	}

	if(count % 10 == 0){
		background(155, 50, 50);
	}

	count++;
}
