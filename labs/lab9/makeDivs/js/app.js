let divBox = document.getElementById("createDiv"); //Pull div

let objects = [ //Make an array of objects

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#FF0000", height: 300, width: 100 },
   
   ];

for (var i = 0; i < objects.length; i++) { //If i does not exceed the length of objects
    let newEl = document.createElement("div"); //Create new div
    newEl.style.height = objects[i].height + "px"; //Loop through the array of height + px
    newEl.style.width = objects[i].width + "px";//Loop through the array of width + px
    newEl.style.backgroundColor = objects[i].color;//Loop through the array of colors
    divBox.appendChild(newEl); //Display vertically 
}