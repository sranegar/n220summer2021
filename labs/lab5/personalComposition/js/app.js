let dvCardFlip = document.getElementById("cardFlip"); //call to ID to style div

dvCardFlip.innerHTML = "hello"; //set inner HTML to "hello"
dvCardFlip.style.backgroundColor = "#0394fc" //style background color of div
dvCardFlip.style.width = "200px"; //style width of div
dvCardFlip.style.height = "200px"; //style height of div

function colorChange () { //style mouse over function
    dvCardFlip.style.backgroundColor = "#ec03fc" //change div color to pink when mouse is inside div
}
function resetColor () { //style mouse out function
    dvCardFlip.style.backgroundColor = "#0394fc" //change div color to blue when mouse is outside the div
}

function greetings() { //style inner HTML
    let flip = Math.random(); //variable set to random
    let side = "Goodbye"; //variable set to "Goodbye"
    if (flip > .5) side = "Hello" //style inner HTML to say "Hello" if Math.random is greater than .5
    dvCardFlip.innerHTML = side; //style inner HTML to say "Goodbye" if the random number is less than .5
}
