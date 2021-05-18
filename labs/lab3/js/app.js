
function setup() {
    createCanvas (800,400);
}

function draw() {
    background(255);
    fill(0);
    noStroke();

    //make 25 black circles
    
    for(var i = 1; i < 26; i++) { //
        circle(i*30,200,10);
        }

    // make every 5th circle a green rect

    for(var r = 4.5; r < 26; r = r + 5) {
        fill (178, 247, 184);
        rect(r*30, 185, 30, 30);
    }  

    // make every 3rd circle purple

    for(var s = 3; s < 26; s = s + 3) {
        fill (180, 136, 242);
        circle(s*30,200,10);
    }  

    // make the 15th circle blue

    for(var x = 14.5; x < 26; x = x * 15) {
        fill (178, 223, 247);
        rect(x*30, 185, 30, 30);
    }
}