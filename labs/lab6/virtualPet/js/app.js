let myTamagochi = { //Assign object for pet 
    name: "Waffles", //Give name
    energy: 50, //Give starting energy level
    happiness: 60, //Give starting happiness level
}

//Get ID so it's able to be styled in js

let statDiv = document.getElementById("displayStats")

//Set array for name, happiness, energy

var stats = [
    { name: "Waffles", happiness: 50, energy: 50 }
]

//Give function to "Feed Pet" button

function feedPet () {
    let name = stats[0].name; //Pull name using array
    let energy = stats[0].energy; //Pull energy using array
    myTamagochi.energy = myTamagochi.energy + 5; //Increase energy of pet by five each time button is clicked
    console.log(myTamagochi.energy); //Check in console log
    statDiv.innerHTML = `<h1>${name}</h1><p>${myTamagochi.energy}</p>`; //Display name and energy level on page
}


//Give function to "Play with Pet" button

function playPet () {
    let name = stats[0].name; //Pull name using array
    let happiness = stats[0].happiness; //Pull energy using array
    myTamagochi.happiness = myTamagochi.happiness + 5; //Increase happiness of pet by five each time button is clicked
    console.log(myTamagochi.happiness); //Check in console log to make sure program is working
    statDiv.innerHTML = `<h1>${name}</h1><p>${myTamagochi.happiness}</p>`; //Display name and happiness level on page
} 

function reset () {
    statDiv.innerHTML = reset;
}