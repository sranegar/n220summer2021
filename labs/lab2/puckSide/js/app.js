var x;

function setup() {
    createCanvas(400,300);
    x = width/2;
}

function draw() {

    // draw circle where mouse is at 
    circle(mouseX,mouseY,30);

     // draw circle red on right half of canvas
    if(mouseX > 200) {
        fill (255,0,0);
    } 

       // draw circle blue on left half of canvas
    if (mouseX < 200) {
        fill (0,0,255);
    }
  



}