/**
** Kevin's notes: Nicely done!  Great use of a function to create your character.  
This might be a good sketch to build on for your midterm project.  Don't forget to call background(75); on the first line
of your draw loop.  This doesn't really affect the functionality of your current sketch, however if you ever plan on adding
animation to the sketch in the future, you'll want to clear out the background so the shapes appear to animate instead of 
smearing across the screen.
*/

//Howard Park
//Creative Coding
//Week 5 Homework


function setup() {
  createCanvas(500,500);
  background(75);
}

function draw() {
	//eye size, ear size, trunk size, color
	elephant(10, 5, 150, 'gray');
}

function elephant(eyeSize, earSize, trunkSize, color){
	//Color
	noStroke();
	fill(color);
	//Head
	ellipse(width/2, height/2.5, 200, 200);
	beginShape();
	//Trunk
	vertex(width/2 - 50, height/2);
	vertex(width/2 + 50, height/2);
	vertex(width/2 + 25, height/2 + trunkSize);
	vertex(width/2 - 25, height/2 + trunkSize);
	endShape();
	//Left Ear
	beginShape();
	vertex(width/2 - 75, height/4 + 100);
	vertex(width/2 - 75, height/3);
	vertex(width/6 - earSize, height/6 - earSize);
	vertex(width/6 - earSize, height/2 + 50 + earSize);
	endShape();
	//Right Ear
	beginShape();
	vertex(width/2 + 75, height/4 + 100);
	vertex(width/2 + 75, height/3);
	vertex(width - 75 + earSize, height/6 - earSize);
	vertex(width - 75 + earSize, height/2 + 50 + earSize);
	endShape();
	//Eyes
	fill('black');
	ellipse(width/2 - 50, height/2.5 - 25, eyeSize, eyeSize);
	ellipse(width/2 + 50, height/2.5 - 25, eyeSize, eyeSize);
}
