let username = document.getElementById("userName"); //Call username input
let password = document.getElementById("passWord"); //Call password input
let display = document.getElementById("display"); //Call div that displays text


function validateInfo() { //Create function for submit button
    if ((username.value=="Username") && (password.value=="Password")) { //If usename and password are equal to the exact string values
        display.innerHTML = "Success"; //Let the div display the word "success"
    } else {
        display.innerHTML = "Wrong Information"; //If not, let the div display the words "wrong information"
    }
}