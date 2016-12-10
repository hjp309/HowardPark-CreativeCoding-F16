/**
* Kevin's comments: See #17 for more detailed comments about createCanvas and for loop initialization.
* Otherwise keep up the good work!
*/
//Howard Park
//Creative Coding
//Week 1 Homework Part 2
//Wall Drawing #56

height = 600;
width = 600;
margin = 20;
gap = (width - margin*2)/37;
function setup(){
	createCanvas(height, width);
}

function draw(){
	background(255);
	line(margin, margin, width-margin-gap, margin);
	line(margin, height-margin, width-margin-gap, height-margin);
	for(rLines = 0; rLines < 37; rLines++){
		// Vertical Lines
		line(margin + gap*rLines, margin, margin + gap*rLines, height - margin);
		// Right Side Horizontal Lines
		line(margin + gap*18, margin + gap*rLines, width-margin-gap, margin + gap*rLines);
	}

	//Bottom Left Horizontal Lines
	for(lLines = 0; lLines < 19; lLines++){
		line(margin, margin + gap*19 + gap*lLines, margin + gap*19, margin + gap*19 + gap*lLines);
	}

	for (dLines = 0; dLines < 19; dLines++){
		//Bottom-Left
		line(margin, margin + gap*19 + gap*dLines, margin + gap*dLines, margin + gap*19);
		line(margin + gap*dLines, margin + gap*37, margin + gap*18, margin + gap*19 + gap*dLines);

		//Bottom-Right
		line(margin + gap*18, margin + gap*19 + gap*dLines, margin + gap*18 + gap*dLines, margin + gap*19);
		line(margin + gap*18 + gap*dLines, margin + gap*37, margin + gap*36, margin + gap*19 + gap*dLines);

		line(width - margin - gap, margin + gap*19 + gap*dLines, width - margin - gap - gap*dLines, margin + gap*19);
		line(width - margin - gap - gap*dLines, height - margin, margin + gap*18, margin + gap*19 + gap*dLines);

	}


}
