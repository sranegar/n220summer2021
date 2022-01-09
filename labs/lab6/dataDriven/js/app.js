//Create object with properties 
var myObject = { 
    width: 155, //Assign width
    height: 200, //Assign height
    color: "#eda1ff", //Assign color
    x: 0, //Assign x position
    y: 0, //Assign y position
};

//Setup
function setup() { 
      createCanvas (800,200); //Create size of canvas
}

//Draw
function draw () { 

    //Create object
    noStroke(); //No stroke on rect

    background(26, 26, 23); //Light blue background
    fill(243, 236, 120); //Dip brush in paint
    rect(myObject.x, myObject.y, myObject.width, myObject.height); //Create rect using object properties

    //Animate object
    myObject.x = myObject.x + 5; //Move rect across screen at 5px per frame

    if (myObject.x >= 800) { //Stop rect when it reaches the width of canvas
        myObject.x = myObject.y - 5; //Move rect back to the left of screen 
    }
}