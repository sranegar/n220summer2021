let dvCoin = document.getElementById("coin"); //call to ID to style div

dvCoin.innerHTML = "hello"; //set inner HTML to "hello"
dvCoin.style.backgroundColor = "#0394fc" //style background color of div
dvCoin.style.width = "200px"; //style width of div
dvCoin.style.height = "200px"; //style height of div

function colorChange () { //style mouse over function
    dvCoin.style.backgroundColor = "#ec03fc" //change div color to pink when mouse is inside div
}
function resetColor () { //style mouse out function
    dvCoin.style.backgroundColor = "#0394fc" //change div color to blue when mouse is outside the div
}

function greetings() { //style inner HTML
    let flip = Math.random(); //variable set to random
    let side = "Goodbye"; //variable set to "Goodbye"
    if (flip > .5) side = "Hello" //style inner HTML to say "Hello" if Math.random is greater than .5
    dvCoin.innerHTML = side; //style inner HTML to say "Goodbye" if the random number is less than .5
}
