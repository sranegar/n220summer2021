var colors = ["#f8b0ff", "#b0fff7", "#c6b0ff", "#b0d5ff"]; //set array of colors

let r; //assign variable

function setup() {
  createCanvas(720, 400);
  r = random(colors); //assign variable to equal a random color from the array
}

function draw() {
  noStroke();
  fill(r); //assign random color at immediate load
  circle(200,200,50);
}

// create a mouse clicked function
function mousePressed() { //if mouse is clicked
  let d = dist(mouseX, mouseY, 200, 200); //if mouse is inside of the circle
  if (d < 100) { //if true
    r = random(colors); //pick a new random color from the array on click
  }
}
