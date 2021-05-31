let dvBox = document.getElementById("box") //call to ID to style div

dvBox.style.backgroundColor = "#4990bf"; //set div to blue
dvBox.style.width = "100px"; //set width
dvBox.style.height = "100px"; //set height

function changeToBlack() { //style mouse over function
    dvBox.style.backgroundColor = "#000000"; //set div to black when mouse is over div
}

function changeToBlue () { //style mouse out function
    dvBox.style.backgroundColor = "#4990bf"; //set div to blue when mouse is not over the div
}
