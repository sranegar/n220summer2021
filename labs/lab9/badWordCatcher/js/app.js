let txtBox = document.getElementById ("dvOutput");
let insertTxt = document.getElementById ("insertTxt");

let sum = 0

let badWordArray = ["water", "clear", "tires"] //Create array of bad words
 

function badWordCatch () {

    let string = insertTxt.value; //turn input into a string
    console.log(string);
    let splitString = string.split(" "); //seperate on space
    console.log(splitString);

    for (var i = 0; i < string.length; i++) { //loop through the length of the input array
       if (string.includes(badWordArray[i])) { //if input array contains any of the strings from the badword array
            sum = sum + 1;  //add one per string
            txtBox.innerHTML = "Bad word(s) found: " + sum; //display in output 
        } 
    }

    console.log(sum)
}

