//Create collection for topic: music 

let musics = [ //Assign three properties to each object
    { genre: "Funk", artist: "Parliment", album: "Mothership Connection"}, 
    { genre: "Rock", artist: "Umphrey's Mcgee", album: "Anchor Drops"},
    { genre: "Bluegrass", artist: "Grateful Dawg", album: "Garcia & Grisman"}
]

let dvBox = document.getElementsByClassName("box") //Pull class in order to style in js


//Create a loop through the elements 
    for (var i = 0; i < dvBox.length; i++) {   //Loop cannot exceed 3
        let genre = musics[i].genre; 
        let artist = musics[i].artist;
        let album = musics[i].album; 
        dvBox[i].innerHTML = `<h1>${genre}</h1><h2>${artist}</h2><p>${album}</p>`; //Display information for each object in each div on page
        if (musics[0].genre != 1) {
            dvBox[0].style.backgroundColor = "#96f2ae";
        }
}