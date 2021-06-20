element.addEventListener("click", divClicked) //add event handler for click




function divClicked(event) { //event 

//get attribute 
let response = event.target.getAttribute  ("data-response"); //set variable for getting attribute
event.target.style.backgroundColor = response;
} //on click, change each div to set color of attribute