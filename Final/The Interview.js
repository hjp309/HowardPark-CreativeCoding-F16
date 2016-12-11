//Howard Park
//Creative Coding - Kevin Siwoff
// The Interview Final 2/3

var detective, hat, shirt, pants, shoes, interviewer, table;
var pass, hatbool, shirtbool, pantsbool, shoesbool = false;
var results = "Let us begin the interview, shall we?";
var floor_tiles = [];

function preload(){
	detective = loadImage('sprites/detective_nude.png');
	hat = loadImage('sprites/detective_hat.png');
	shirt = loadImage('sprites/detective_shirt.png');
	pants = loadImage('sprites/detective_pants.png');
	shoes = loadImage('sprites/detective_shoes.png');
	interviewer = loadImage('sprites/interviewer.png');
	table = loadImage('sprites/table.png');
	
}

function setup(){
	createCanvas(500, 300);
	background(155);
	
	for(var t = 0; t < width/32; t++){
		var floor = loadImage('sprites/wood_tile.png');
		floor_tiles.push(floor);
	}
	console.log(floor_tiles);
	
	var clothes = ["Put on Hat", "Put on Shirt", "Put on Pants", "Put on Shoes", "Start Interview"]; // Just to make the code clean.
	var functions = [wearHat, wearShirt, wearPants, wearShoes, startInterview];
	for(var i = 0; i < clothes.length; i++){
		var change = createButton(clothes[i]);
		change.position(10, i*30 + 35);
		change.mousePressed(functions[i]);
	}
}

function wearHat(){
	hatbool = true;
}

function wearShirt(){
	shirtbool = true;
}

function wearPants(){
	pantsbool = true;
}

function wearShoes(){
	shoesbool = true;
}

function startInterview(){
	if(hatbool && shirtbool && pantsbool && shoesbool){
		results = "Marvelous presentation, detective! \nYou're in!";
	}else{
		results = "We don't approve of such undignified \nindividuals in the field. Be gone!";
	}
}


function draw(){
	for(var r = 0; r < height/32; r++){
		for(var c = 0; c < width/32; c++){
			image(floor_tiles[c], c*32, r*32, floor_tiles[c].width, floor_tiles[c].height);
		}
	}

	rect(0, -1, 500, 30);
	textSize(18);
	text("Dress up for your interview and see if you got the job!", 15, 20);

	image(detective, width/2-detective.width/2, height/2-detective.height/2, detective.width, detective.height);

	if(hatbool){
		image(hat, width/2 - hat.width/2, height/2 - hat.height/2, hat.width, hat.height);
	}
	if(shirtbool){
		image(shirt, width/2 - shirt.width/2, height/2 - shirt.height/2, shirt.width, shirt.height);
	}
	if(pantsbool){
		image(pants, width/2 - pants.width/2, height/2 - pants.height/2, pants.width, pants.height);
	}
	if(shoesbool){
		image(shoes, width/2 - shoes.width/2, height/2 - shoes.height/2, shoes.width, shoes.height);
	}

	image(table, width/2 - table.width/2, height/2 + table.height + 32, table.width, table.height);
	image(interviewer, width/2-interviewer.width/2, height/2-interviewer.height/2 + 100, interviewer.width, interviewer.height);
	rect(160, 60, 310, 50);
	text(results, 168, 80);	
}