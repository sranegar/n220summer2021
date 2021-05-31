let dvHundred = document.getElementById("hundred") //call to ID to style div


dvHundred.style.backgroundColor = "#4990bf"; //set color to blue
dvHundred.style.width = "20px"; 
dvHundred.style.height = "20px";

function repeatDivs() {
    for(var i = 0; i < 100; i++) {
        dvHundred[i];
    }
}