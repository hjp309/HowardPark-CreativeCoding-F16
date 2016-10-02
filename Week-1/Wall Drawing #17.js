//Howard Park
//Creative Coding
//Week 1
//Wall Drawing #17

var height = 600;
var width = 600;
var rectWidth = (width - (gap*3) -(margin*2))/4;
var rectHeight = (height - (margin*2));

function setup(){
	createCanvas(height, width);
}

function draw(){
	var gap = 20;
	var margin = 20;
	background(255);

	//Rectangle with vertical lines
	var numVlines = 32;
	var vertLineGap = ((width - (margin*2) - (gap*3))/4)/numVlines;
	for(vertLines = 0; vertLines < numVlines; vertLines++){
		line(margin + vertLineGap*vertLines, margin, margin + vertLineGap*vertLines, margin + rectHeight);
	}

	//Rectangle with horizontal lines
	var numHlines = 100;
	var horLineGap = (height - (margin*2))/numHlines;
	for(horLines = 0; horLines < numHlines; horLines++){
		line(margin + rectWidth + gap, margin + horLineGap*horLines, margin + rectWidth*2, margin + horLineGap*horLines);
	}

	//Rectangle with bottom left to top right, diagonal lines
	var totalLines = 20;
	var dGap = rectWidth/totalLines;
	for(var dLinesTop = 0; dLinesTop < totalLines; dLinesTop++){
		line(margin + rectWidth*2 + gap, margin + dLinesTop*dGap, margin + rectWidth*2 + gap + dLinesTop*dGap, margin);
	}

	for(var dLinesMid = 0; dLinesMid < totalLines*3.5; dLinesMid++){
		line(margin + rectWidth*2 + gap, margin + totalLines*dGap + dLinesMid*dGap, margin + gap + totalLines*3*dGap, margin + dLinesMid*dGap);
	}

	for(var dLinesBot = 0; dLinesBot < totalLines; dLinesBot++){
		line(margin + rectWidth*2 + gap + dLinesBot*dGap, margin + totalLines*4.5*dGap, margin + rectWidth*3 + gap, margin + totalLines*3.5*dGap + dLinesBot*dGap);
	}

	//Rectangle with bottom right to top left, diagonal lines
	for(var dLinesTop = 0; dLinesTop < totalLines; dLinesTop++){
		line(width - margin - dLinesTop*dGap, margin, width - margin, margin + dLinesTop*dGap);
	}

	for(var dLinesMid = 0; dLinesMid < totalLines*3.5; dLinesMid++){
		line(width - margin, margin + totalLines*dGap + dLinesMid*dGap, width - rectWidth - margin, margin + dLinesMid*dGap);
	}

	for(var dLinesBot = 0; dLinesBot < totalLines; dLinesBot++){
		line(width - margin - dLinesBot*dGap, margin + totalLines*4.5*dGap, width - margin - rectWidth, margin + totalLines*3.5*dGap + dLinesBot*dGap);
	}
}
