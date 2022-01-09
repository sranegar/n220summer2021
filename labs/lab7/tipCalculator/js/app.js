let billTotal = document.getElementById("billTotal"); //Pull input into js
// console.log(txtName);
let dvOutput = document.getElementById("dvOutput"); //Pull output div into js




function generateTotalBill() { //Create function 
    let tipPercentage = .2 * Number(billTotal.value); //Calculate tip percentage for each input
    let finalTotal = tipPercentage + Number(billTotal.value); //Add the tip percentage to the input to get total bill
    console.log("Tip: " + "$"+tipPercentage + "Total: " + "$"+finalTotal); //Console log tip percentage plus total bill
    dvOutput.innerHTML = "Tip: " + "$"+tipPercentage.toFixed(2) + "<hr>" + "Total Bill: " + "$"+finalTotal.toFixed(2); //Display in a div for user 
}