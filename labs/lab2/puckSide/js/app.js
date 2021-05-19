var x;

function setup() {
    createCanvas(400,300);
    x = width/2;
}

function draw() {
    background(0);

    circle(mouseX,mouseY,30);  // draw circle where mouse is at 

    if(mouseX > 200) {  // if circle is on the right side of canvas
        fill (217, 39, 42); // draw circle red
    } 

    
    if (mouseX < 200) { //if circle is on left side of canvas
        fill (39, 122, 217); //draw circle blue
    }
  
}