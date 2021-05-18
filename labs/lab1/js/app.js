function setup() {
    var red = "#de2846";
    let defaultWeight = 2;

    // <!-- my attempt at creating a moogle -->

    createCanvas(800,600);
    background("#EAE18F");


    // Line connecting red ball to head

    stroke(1);
    strokeWeight (2); //set thickness
    line(220, 220, 60, 40,); //line going from top left to center

    // red ball on top of head

    strokeWeight(defaultWeight); 
    noStroke(); //no stroke around red ball
    fill(red); //dip paint in red
    circle(50,30,20); //creates small circle

    // rectangle moogle wings because triangles are too hard

    strokeWeight(defaultWeight);
    fill("#6F50C7"); //dip paint in purple
    rect(12,130,280,100);

    
    // ears come first because they are layered behind the face

    strokeWeight(defaultWeight);
    fill("#F4EFEF"); //dip paint in light gray 
    stroke("black"); 
    circle(100,140,50); //color applied to each circle
    circle(200,140,50);

    // three circles to make up moogle face

    fill("#DBD1D1"); //dip paint in light gray
    stroke("black"); 
    strokeWeight(defaultWeight);

    circle(150,150,50); //paint applied to all three 
    circle(100,200,50);
    circle(200,200,50);


    // moogle nose!

    fill(red); //dip paint in red
    noStroke();
    circle(150,220,50);


}   