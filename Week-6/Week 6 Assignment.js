//Howard Park
//Creative Coding
//Week 6 Assignment

function setup(){
	createCanvas(windowWidth, windowHeight)
	colorMode(RGB)
	angleMode(DEGREES)
	noStroke()
	background(155, 255, 155)
}

var spinspeed = 2;
var speed = 0.5
var i = 0
var radius = 100;
var colour = lerpColor(color(255, 0, 0), color(0, 0, 255), .33)

function draw(){
	from = color(255, 0, 0)
	to = color(0, 255, 0)
	interA = lerpColor(from, to, i/2500)
	translate(0, height/2)
	rotate(315)
	push()
	scale(i/1000)
	translate(i/3, i/3)
	fill(interA)
	rotate(frameCount*spinspeed)
	ellipse(-radius, -radius, 25 + 100/i, 25 + 100/i)
	//For 
	//ellipse(-radius, -radius, 10000/i, 10000/i)
	pop()
	i++
}
