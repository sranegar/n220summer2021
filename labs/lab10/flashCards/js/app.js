let element = document.getElementById("dvBox");
element.addEventListener("click", giveAnswer) //add event handler for click


function giveAnswer(event) {
//get attribute 
let answer = event.target.getAttribute  ("data-response"); //set variable for getting attribute
element.innerHTML = answer;
} //on click, change each div to set color of attribute






//Create three buttons
//Create output
//data-response to create answers when button is clicked
//div shows the answers
//button functions to give the answer
//button stores the answer 
//When button is pressed
//store answer in button
//Show answer in div

// An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.

// When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute.

 