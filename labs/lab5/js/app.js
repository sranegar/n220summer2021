let dvGreen= document.getElementById("green");
let varHeight = "100px";
let varWidth = "100px";


dvGreen.style.backgroundColor = "#96f2ae"; 
dvGreen.style.width = varWidth;
dvGreen.style.height = varHeight;

function increaseSize () {
      let increaseWidth = "110px";
      let increaseHeight = "110px";
      if(increaseWidth >= varWidth) dvGreen.style.width = increaseWidth;
      if (increaseHeight >= varHeight)
      dvGreen.style.height= increaseHeight;

      
      dvGreen.style.backgroundColor = "#F5021E";
}







//100x100 square div in green
//when clicked, increases by 10% each time
//make variable to store height and width
