let txtBox = document.getElementById ("dvOutput");
let insertTxt = document.getElementById ("insertTxt");

let sum = 0

let badWordArray = ["water", "clear", "tires"]


function badWordCatch () {

    let string = insertTxt.value;
    console.log(string);
    let splitString = string.split(" ");
    console.log(splitString);

    for (var i = 0; i < string.length; i++) {
       if (string.includes(badWordArray[i])) {
            sum = sum + 1;
            txtBox.innerHTML = "Bad word(s) found: " + sum;
        } 
    }

    console.log(sum)
}

