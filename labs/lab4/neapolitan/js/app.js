let icecreamFlavors = ["#ffccff", "#ede5df", "#d6b398"]; //Array of three different colors


function setup () {
    createCanvas (500,500);
    noStroke (); //No ugly stroke

    for (var i = 0; i < icecreamFlavors.length; i++) { //Value cannot exceed the amount of colors in the array
        fill(icecreamFlavors[i]);  //Change color fill each time value increases
        rect(20+i*100,50,100,320); //Create rectangles across the x axis
    }
}

//Create an array with strings
//Array has three different colors
//Use a loop to create a rectangle for each color horizontially across the page