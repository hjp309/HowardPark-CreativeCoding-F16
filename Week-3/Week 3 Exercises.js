//Week 3 Exercises

function setup(){

}

function draw(){
	createCanvas(500,500);
	background(color(0,255,0));
	fill(color(255,0,0));

	//Create 100 shapes in a row

	// for(var i = 0; i < 100; i++){
	// 	rect(0 + 5*i, 0, 3, 3);
	// }

	//Create the same shapes but in both vertical and horizontal dimensions
	for(var i = 0; i < 100; i++){
		for(var j = 0; j < 100; j++){
			rect(0 + 5*i, 0 + 5*j, 3, 3);
		}
	}
}