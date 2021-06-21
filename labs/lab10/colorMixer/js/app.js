let element = document.getElementById("dvBox");
let elementTwo = document.getElementById("dvChangeColor");


x = 0
y = 0
z = 0

function plusOne() { //add one 
    x++;
    console.log(x);
}

function plusOne1() { //add one
    y++;
    console.log(y);
}

function plusOne2() { //ad one
    z++;
    console.log(z);
}

function divClicked(event) { //event 

//get attribute 
let response = event.target.getAttribute  ("data-response"); //set variable for getting attribute
element.innerHTML = response;
} //on click, change each div to set color of attribute

//create functions to add by one, five and ten
//when button is pressed, add to hexidecimal value
//display rgb in div
//color value of square div should recieve the added hexidecimals




// This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

// 9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
// 1 div that will change colors to the rgb color calculated

// 1 div that shows the current calculated rgb color

// You must use attributes on the buttons for the values to change the colors by