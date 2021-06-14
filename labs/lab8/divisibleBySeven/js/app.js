let number = document.getElementById("number"); //pull input
let dvOutput = document.getElementById("dvOutput"); //pull div 

function divideBySeven () {
    let math = Number(number.value) / 7; //Assign equation for input divided by seven
    let result = math; //result of input number divided by 7
    console.log(math)
    if (result % 1) { //if the modulus is not a whole number
        dvOutput.innerHTML = "false."; //display false in output
      } else { //if it is a whole number
         dvOutput.innerHTML = "true."; //display true
         }
     }
