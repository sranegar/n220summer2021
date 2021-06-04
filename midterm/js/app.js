var circs = [ 100, 100, 20, 300, 200, 20 ]; //Assigned array for two different circles

grow = .1; //set variable to increase size of circles by .1


function setup() {
    createCanvas(400,400)
    background("#91a1f2")
    
}
    
function draw () {
    update();
    increaseSize();
}

function update() {  //Create function to draw circles using the array      
    noStroke(); 
    fill("#88f291");
    // let r = 1
    // r = r + 1
    // for (var i = 0; i < circs.length; i + r) {
    circle(circs[0], circs[1], circs[2]); //assign values for x, y, and r
    circle(circs[3], circs[4], circs[5]); //assign values for x, y, and r
// }
}

function increaseSize() { //Create function to increase size of circles
    circs[2] = circs[2] + grow //Increase circle by .1 
    circs[5] = circs[5] + grow //Increase second circle by .1
}

//Use a for loop
//Increase size of each circle by .1 each draw call
//After 30 frames
//Add new circle to the array at mouse X
//Add new circle to the array at mouse Y
//Start at size twenty

