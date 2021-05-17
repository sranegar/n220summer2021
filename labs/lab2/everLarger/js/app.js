let d = 1;

function setup() {
    createCanvas(1920,1080);
    d = d + 1;
}
 
function draw() {
    fill(230, 142, 214);
    circle(650,300,d); //circle in center of screen with diameter of 1

    d = d + 1; // increase diameter by 1 every update frame 

    if(d >= 200) { //stopping circle from exceeding 200
        clear(); // clears frames per second
        d = 1; //setting circle back to 1
    }
}
