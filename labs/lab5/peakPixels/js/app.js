let dvGreen= document.getElementById("green"); //call ID to style div
let size = 100; //set size to 100
let makeBigger = 1.1; //set variable increase to 1.1 

dvGreen.style.backgroundColor = "#96f2ae"; 
dvGreen.style.width = size + "px"; //set div's width
dvGreen.style.height = size + "px"; //set div's height

function increaseSize () { // Function for when div is clicked
      size = size * makeBigger; //size variable increases by 10%
      dvGreen.style.width = size + "px"; //set new width
      dvGreen.style.height = size + "px";  //set new height
}

// Make the div
// make a variable for size, set to 100
//set the div's size to that (dvRef.style.width = size +"px";, same for height)

// When the div is clicked..
   // set the size variable to 10% bigger (hint, multiply by 1.1)
   //Set the div's size to the new, calculated size (same as in setup)