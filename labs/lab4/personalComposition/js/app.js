let myColors = ["#ab85ed", "#e485ed", "#ed85a9", "#eda885", "#eddc85", "#a4ed85", "#85edea", "#859ced"]; //Assign colors of rainbow
let myCircles = [140,340,540,740,940,1140,1340]; //Assign values and use for x-axis 
 
function setup() {
    createCanvas (1920,700);
    noStroke ();
    background (0);

    
    for (var i = 0; i < myColors.length; i++) { //Value cannot exceed the amount of colors in the array
        fill(myColors[i]);  //Change color fill each time value increases
        rect(i*200,i,80,700); //Create rectangles across the x axis
    }

    for (var i = 0; i < myCircles.length; i++) { //Value cannot exceed amount of integers in the array
        fill (200); //fill each circle a gray color
        circle(myCircles[i], 375, 50); //move circles across the x-axis
    }
}

