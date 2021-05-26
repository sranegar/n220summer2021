let myArray = ["#ab85ed", "#e485ed", "#ed85a9", "#eda885", "#eddc85", "#a4ed85", "#85edea", "#859ced"];

function setup() {
    createCanvas (1920,1080);
    noStroke ();

    
    for (var i = 0; i < myArray.length; i++) { //Value cannot exceed the amount of colors in the array
        fill(myArray[i]);  //Change color fill each time value increases
        rect(i*100,i,100,700); //Create rectangles across the x axis
    }
}

//thank you