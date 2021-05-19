let xPos = 0;
let yPos= 0;

function setup () {
    createCanvas(800,600);
}

function draw() {
    
    background(0); //assign background
    fill (157, 237, 237); //assign color

    xPos = xPos + 5;  // move ball to the right on x-axis 5 px per frame


    if(xPos > 800) { // stops ball when it reaches 800px
        xPos = yPos - 5; // move ball back to far left of screen once it exceeds 800px
    } 

    circle(xPos,300,50); //x position of circle = 0
}

