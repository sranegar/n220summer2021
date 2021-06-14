let stoplightColors = ["#a83238", "#edde3b", "#3bed5f"]; //Array of three different colors

function setup () {
    createCanvas (500,500);
    noStroke ();
}

function draw () {
    for (var i = 0; i < stoplightColors.length; i++) { //Value cannot exceed the amount of colors in the array
        fill(stoplightColors[i]);  //Change color fill each time value increases
        circle(30,20+60*i,20); //Create circles across the y axis using the for loop 
    }
}