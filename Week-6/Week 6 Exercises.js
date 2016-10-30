//Howard Park
//Week 6 Exercises

function setup(){
	createCanvas(600, 600)
	angleMode(DEGREES)
	rectMode(CENTER)
}

function draw(){
	background(155,255,155)
	//Exercise 1
	push()
	translate(50, 50)
	rect(0, 0, 100, 100)
	pop()

	push()
	translate(150,150)
	rect(0, 0, 100, 100)
	pop()

	push()
	translate(250, 50)
	rect(0, 0, 100, 100)
	pop()

	//Exercise 2
	translate(width/2, height/2)
	noStroke()
	fill(155,155,155)
	push()
	rotate(mouseX*1.5)
	rect(0, 0, 150, 150)
	pop()
	rotate(45+mouseX*1.5)
	rect(0, 0, 150, 150)
	fill(255, 255, 255)
	ellipse(0, 0, 25, 25)


}
