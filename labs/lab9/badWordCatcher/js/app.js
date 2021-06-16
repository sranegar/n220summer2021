let txtBox = document.getElementById ("dvOutput");
let insertTxt = document.getElementById ("insertTxt");


// let badWords = [ "clear", "water", "tires" ];

let sum = 0
let x = "water"; 
let y = "clear";
let z = "tires";

function badWordCatch () {

    let badWords = insertTxt.value;
    let splitString = badWords.split(" ");
    console.log(splitString);

    if (badWords == x, y || z) {
        sum = sum + 1;
    }

    console.log(sum)

    // if (badWords == catcherSecond) {
    //     sum = sum + 1;
    // }

    // if (badWords == catcherThird) {
    //     sum = sum + 1;
    // }

    // console.log(sum)

    // var element = badWords.find(function (item) {
    //      return item == "clear";
    // })
    // console.log(element);
}

