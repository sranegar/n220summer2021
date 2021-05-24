function setup() {
    createCanvas (800,500);
}

function draw() {
    fill ("red"); //make red color
    noStroke (); //no stroke 

    for (var s = 0; s < 4; s++) {  //y axis (rects) cannot exceed 4
    for (var r = 0; r <= s; r++) { //x axis cannot exceed y axis in order to create pyramid
         rect(r*42, s*42, 40, 40); //x and y coordinates spaced out accordingly
    }
}
}

//y axis cannot exceed four(rectangles)
//y axis increases by one
//x axis cannot exceed y axis 