var colors = ["#f8b0ff", "#b0fff7", "#c6b0ff", "#b0d5ff"];

let r;

function setup() {
  createCanvas(720, 400);
  r = random(colors);
}

function draw() {
  noStroke();
  fill(r);
  circle(200,200,50)
}

// if mouse is clicked
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    r = random(colors);
  }
}
