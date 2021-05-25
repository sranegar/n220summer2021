let xPositions = [];

function setup() {
    createCanvas (600,300);
    fill (195, 124, 217)
}

function draw() {

    background(0);

    if(xPositions.length > 10) {
        xPositions.shift();
        // console.log(xPositions);
    }

    xPositions.push(mouseX);
    for(var i = 0; i < xPositions.length; i++) {
        circle(xPositions[i], 150, i*3);
    }
}