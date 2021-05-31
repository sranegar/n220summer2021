let dvGreen= document.getElementById("green")
let varHeight = "100px"
let varWidth = "100px"


dvGreen.style.backgroundColor = "#96f2ae"; 
dvGreen.style.width = varWidth
dvGreen.style.height = varHeight

function increaseSize () {
        if(dvGreen >= "100px") {
              dvGreen.style.height = + "110px";
              dvGreen.style.width = + "110px";
        }
        dvGreen.style.backgroundColor = "#F5021E";
}







//100x100 square div in green
//when clicked, increases by 10% each time
//make variable to store height and width
