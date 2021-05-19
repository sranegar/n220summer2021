function setup() {
    createCanvas (300,300);
}

function draw() {
    background(217, 217, 217); //gray background
    noFill (); // allow to see individual strokes
    
    for(let tabouli = 1; tabouli < 39; tabouli++) { //increase circles by one until it reaches 39 circles
        circle(150,150,4*tabouli) //multiply diameter to create circles inside circles
    }
}

//no fill so we can see the individual strokes
//let variable be less than how many circles you want to create
//increase circles by one
//multiply diameter of circle by a number large enough to create visible circles 