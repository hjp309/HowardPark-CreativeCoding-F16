//Howard Park
//Creative Coding - Kevin Siwoff
//Week 9 Assignment 

var textLine;
var cmd;
function preload(){
	textLine = loadStrings('madlib poetry.txt'); //Pulled from a stanza of "The Thrush" by Fay Inchfawn
}

function setup(){
	createCanvas(500, 500);
	background(200, 50, 50);
	cmd = new RiLexicon();

	textAlign(CENTER, CENTER);
	textSize(20);
	for(var i = 0; i < textLine.length; i++){

		console.log(RiTa.tokenize(textLine[i])); //Console for debugging purposes
		var temp = RiTa.tokenize(textLine[i]);

		console.log(RiTa.getWordCount(textLine[i]));
		for(var j = 0; j < temp.length; j++){
			console.log(temp[j]);

			if(temp[j] === "adjective"){ //Tests for key words
				temp[j] = cmd.randomWord("jj", 1);
				textLine[i] = temp.join(' ');
			} else if (temp[j] === "noun"){
				temp[j] = cmd.randomWord("nn", 1);
				textLine[i] = temp.join(' ');
			} else if (temp[j] === "verb"){
				temp[j] = cmd.randomWord("vb", 1);
				textLine[i] = temp.join(' ');
			}
		}
		text(textLine[i], width/2, height/4 + i*25);
	}
	textSize(15);
	text("Warning: this poem will probably not make sense.", width/2, height - 40);
}
