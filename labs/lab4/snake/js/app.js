let xPositions = []; //Position of mouse on x-axis array 
let yPositions = []; //Position of mouse on y-axis array

function setup() {
    createCanvas (600,300);
    fill (195, 124, 217);
}

function draw() {

    background(0); //Black background

    if(xPositions.length > 10) { //Assign shift after x axis exceeds ten positions 
        xPositions.shift(); //Remove first element of array on x axis
    }
    
     if(yPositions.length > 10) { //Assign shift after y axis exceeds ten positions
        yPositions.shift(); //Remove first element of array on y axis
    }

    xPositions.push(mouseX); //Add new element at the end of array at position of mouse on x axis
    yPositions.push(mouseY); //Add new element at the end of array at position of mouse on y axis

    for(var i = 0; i < 10; i++) { //Circles increase by one until it reaches 10 circles
        circle(xPositions[i], yPositions[i], 20); //X and Y position of circle inrease by one until it reaches 10 
    }
}

