let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "hello";
dvCoin.style.backgroundColor = "#0394fc"
dvCoin.style.width = "200px";
dvCoin.style.height = "200px";

function colorChange () {
    dvCoin.style.backgroundColor = "#ec03fc"
}
function resetColor () {
    dvCoin.style.backgroundColor = "#0394fc"
}

function greetings() {
    let flip = Math.random();
    let side = "Goodbye";
    if (flip > .5) side = "Hello"
    dvCoin.innerHTML = side;
}
