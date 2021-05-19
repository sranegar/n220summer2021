let xPos = 0;
let yPos= 0;

function setup () {
    createCanvas(800,600);
}

function draw() {
    
    background(0);
    fill (157, 237, 237);

    xPos = xPos + 5;  // move ball to the right 5 px per frame


    if(xPos >= 800) { // if ball is 800px or greater
        xPos = yPos - 5; // move ball back to far left of screen
    } 

    circle(xPos,300,50);
}

