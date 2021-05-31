let dvGreen= document.getElementById("green")
let height = "100px"
let width = "100px"

dvGreen.style.backgroundColor = "#96f2ae"; 
dvGreen.style.width = width;
dvGreen.style.height = height;

function increaseSize () {
        // dvGreen.style.width = width + "20px"
        // dvGreen.style.height = height + "20px"
        getIncreaseWidth = width + "20px";
        getIncreaseHeight = height + "20px";
        if (width == height) {
        dvGreen.style.width = getIncreaseWidth;
        dvGreen.style.height = getIncreaseHeight;
        }
        dvGreen.style.backgroundColor = "#F5021E";
}



// //make an element
// let newEl = document.createElement("div");
// let width = "100px";
// let height = "100px";

// //customize element
// newEl.style.backgroundColor = "#a1f598";
// newEl.style.width = width;
// newEl.style.height = height;

// function increaseBox () {
//     if ("div" == mouseIsPressed) backgroundColor = "#0a3816";
// }


//display on page
document.body.appendChild(newEl);




//100x100 square div in green
//when clicked, increases by 10% each time
//make variable to store height and width
