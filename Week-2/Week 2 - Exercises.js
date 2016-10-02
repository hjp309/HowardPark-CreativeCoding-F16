//Week 2 Exercises

function setup(){
	createCanvas(600,600);
}

function draw(){
	var posx = 100;
	var posy = 50;
	background(0);

	//Set var for rect position (x,y)

	fill(color(255, 0, 0));
	rect(posx,posy,100,100);

	//Set square to mouse pos
	rect(mouseX, mouseY, 100,100);

	//Expression
	rect(100, 100, rectwidth, 100);
    rect(100, 300, rectwidth*3, 100);

    //Set boundary for shape to appear
	if(mouseX > 100 && mouseY > 100){
        ellipse(mouseX, mouseY, 50, 50);
    }
}
