let insertTxt = document.getElementById ("insertTxt");
let dvOutput = document.getElementById ("dvOutput");


function breakString() {
    let myArray = insertTxt.value;
    let splitNumbers = myArray.split(","); // Takes in a list of comma-separated numbers from the user
    // Splits that list into an array of numbers
    console.log(splitNumbers)

    let sum = 0; 

   for (var i = 0; i < splitNumbers.length; i++) { // Loops through the array 
        sum += Number(splitNumbers[i]); // Sums up the values in array. Converts the string version of the numbers into number versions
        document.getElementById('insertTxt').value = '';
   }

   let average = sum / splitNumbers.length;  // Calculates the average of the array
   console.log(sum);
   console.log(average);
  
   dvOutput.innerHTML = "Sum= " + sum + "Average= " + average; // Displays to the user

}

// Removes the text from the input so the user can type in new numbers
 