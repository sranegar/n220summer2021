function setup() {
    createCanvas (800,500);
}

function draw() {
    fill ("red");
    noStroke ();

    for (var s = 0; s < 4; s++) { 
    for (var r = 0; r <= s; r++) {
         rect(r*42, s*42, 40, 40);
    }
}

}