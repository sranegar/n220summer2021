let xPos = 0;
let yPos= 0;

function setup () {
    createCanvas(800,600);
}

function draw() {
    
    background(0);
    fill (0,180,0);

    xPos = xPos + 5;  // move ball to the right 5 px per frame


    if(xPos >= 800) { // ball cannot exceed 800px
        xPos = yPos - 5; // move ball back to far left of screen
    } 

    circle(xPos,300,50);
}

