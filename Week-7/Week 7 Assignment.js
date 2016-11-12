//Howard Park
//Creative Coding - Kevin Siwoff
//Week 7 Assignment

function setup(){
	createCanvas(1000, 600);
	colorMode(HSB, 360, 125, 100);
}
var pointCount = 0;
function draw(){
	translate(width/2, height/2);
	noStroke();
	if(pointCount > 10000){
		noLoop();
	}
	for(var i = 0; i < pointCount; i++){
		var x = cos(i/165*TWO_PI)*500;
		//var x = sin(i/165*TWO_PI)*500; This creates a very interesting glare effect (picture in folder)
		var y = sin(i/200*TWO_PI)*300;
		var colx = x % 360;
		var sizey = pointCount % 10;
		fill(colx, 100, 100);
		ellipse(x, y, sizey, sizey);
	}
	pointCount++;
}
