//Howard Park
//Creative Coding - Kevin Siwoff
//Week 11 Assignment

var table, rowData, columnData;
var x = 0;
var y = 0;
var textLength = 0;

function preload(){
	table = loadTable("datasheet.csv")
}

function setup(){
	createCanvas(1025, 620);
	textSize(20);
	textStyle(BOLD);
}

function draw(){
	background(color(135, 150, 50));
	translate(30, 50);
	for(var c = 0; c < table.getColumnCount(); c++){
		for(var r = 0; r < table.getRowCount(); r++){
			push();
			if(c === 0){
				translate(0, r*100);
				text(table.getString(c,r), 0, 0);
				// console.log(textWidth(table.getString(c,r)));
			}else{
				translate(c * 150 + 155, r*103 - 10);
				rowData = table.getString(r,c);
				console.log(rowData);
				if(r === 0){
					text(table.getString(c,r), -30, 10);
				}
				if(rowData == 0){
					ellipse(0, 0, 5, 5);
				}else{
					for(var i = 0; i < rowData; i++){
						ellipse(0, 0, 5, 5);
						beginShape();
						var degree = TWO_PI / rowData;
						console.log(degree);
						vertex(0,0);
						rotate(degree);
						vertex(0, 30);
						endShape();
					}	
				}				
			}
			pop();
		}
	}
	noLoop();
}
