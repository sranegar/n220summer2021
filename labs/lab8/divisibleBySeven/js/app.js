let number = document.getElementById("number");
let dvOutput = document.getElementById("dvOutput");

function divideBySeven () {
    let math = Number(number.value) / 7;
    let result = math;
    console.log(math)
    if (result == 7) {
        dvOutput.innerHTML = "true.";
      } else {
         dvOutput.innerHTML = "false.";
         }
     }
