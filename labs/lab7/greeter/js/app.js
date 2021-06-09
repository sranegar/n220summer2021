let txtName = document.getElementById("txtName"); //Pull input into js
// console.log(txtName);
let dvOutput = document.getElementById("dvOutput"); //Pull output div into js


function greetName() { //Create function 
    console.log("Hello " + txtName.value); //"Hello Name" in console log
    dvOutput.innerHTML = "Hello " + txtName.value; //return full phrase on page
}







//create page with input and button
//when button clicked: output "Hello {name}" to console
//{Name} = value in input field
//Use function that takes name as argument
//And returns full phrase as output