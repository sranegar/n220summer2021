var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
    createCanvas(240,120);
    ellipseMode(radius);
}
 
function draw() {
    background(0);
    x += speed; 
    if (x > width+radius) {
        x = -radius;
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
}

//draw circle in center of screen with diameter of 1
//use global veriable to increase diameter of circle by 1 every update frame
//once circle gets to 200, set back to 1