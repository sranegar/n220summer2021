let xPos = 0;
let yPos= 0;

function setup () {
    createCanvas(800,600);
}

function draw() {
    
    background(0);
    fill (0,255,0);

    // let ball move to the right 5 px per frame

    xPos = xPos + 5;

    // move ball back to far left of screen

    if(xPos >= 800) {
        xPos = yPos - 5; 
    } 

    circle(xPos,200,30);
}
