function setup() {
    createCanvas (320,320);
}

function draw() { //Create canvas for hangman to be drawn on
    background(0, 255, 255);
    stroke(10);
    line(300,300, 0, 300);
    line(300, 0, 300, 300);
    line(150, 0, 150, 90);
//attempt for drawing body of hangman
    // for (var i = 0; i < wordLength; i++) {
    //     wrongGuesses==wordLength {
    //         circle(30,30,30)
    //     }
    // }
    
}

var B //set variables
    ,L
    ,placeholder 
    ,correctGuesses
    ,wrongGuesses
    ,wordToGuess
    ,wordLength
    ,words=[]
    ,wrongletter=true;

    function chooseWord() //function for choosing a wood from an array at random
{
	//create an array of ten words
	var words=["hello","stephanie", "kittens", "rain", "music", "unicorn", "cheese", "bears", "pink", "rainbow"];
	//choose a word at random to play hangman
	return words[parseInt(Math.random()*words.length)]; //Return word at random 
}



    function newGame() //Function for button that displays keyboard 
    {
      //initialize all the variables
      placeholder=[];  //placeholder as array
      correctGuesses=0; 
      wrongGuesses=0;
      wordToGuess=chooseWord(); //word to guess = array of words
      wordLength=wordToGuess.length; 
      
      // loop that replaces underscores with the letters that are guessed correctly
      for(var i=0;i<wordLength;i++)
      {
      	placeholder[i] = "_ ";  //instead of concatinating string add underscore to placeholder array
      }
       document.getElementById("keyboard"). innerHTML=placeholder.join(""); //display keyboard and join letters as they are guessed correctly
      
      //loop to make a keyboard of buttons 
      //B hold the buttons
     B = '';
    //L hold letters
     L;
    //this loop to get the letters by charcode
    for (var i = 65; 90 >= i; i++) {// A-65, Z-90
      L = String.fromCharCode(i);
      B += '<button id="'+L+'" onclick="getLetter(\''+L+'\');">' + L + '</button>';  //Give button with letter as id
    }
    document.getElementById("box1").innerHTML = B;
    
    
    }
    
     function getLetter(x)
    {
       document.getElementById(x).disabled = true;  //disable button so user knows it has been chosen
       checkLetter(x); //call function 
    }
    function checkLetter(letter)
    {
      wrongletter=true; //if letter is not in the string
    	document.getElementById("keyboard").innerHTML=placeholder;
              for(var i=0;i<wordLength;i++) //loop through length of word from string 
          { 
          	if(wordToGuess.charAt(i)===letter.toLowerCase()) //check letters to see if they equal to any of the letters in teh string. If yes..
          	{
               placeholder[i]=letter; //replace "_" with letter
               wrongletter=false; //wrong letter does not display
               correctGuesses++; //allow user to keep selecting letters
          	}
          	if(correctGuesses===wordLength) //if user guesses the word before hangman is drawn
          	{
          		let dvWin = document. getElementById ("youWin")
                  dvWin.innerHTML = "You Win!" //display "You Win!" on screen
    
          	} 
          }
          	//if user selects wrong letter
    	if(wrongletter) 
    	{
    		wrongGuesses++; //allow user to keep guessing letters
            // drawHangman() //but draw first bodypart of hangman
            //     circle(20,20,30) //draw head
            // this is where I would put the line the body, arms and legs if I could get it to work. This is where I am struggling most. 
           
        
    	} 
    	document.getElementById("keyboard"). innerHTML=placeholder.join("");//display letters that are guessed correctly from the keyboard
        
      
    }


  

 //build a keyboard for each letter of the alphabet
//create an array of ten different words
//choose a random word from the array at the beginning of each new game
//create placeholders “_” for each letter of the word
//when a letter is pressed, check through the random chosen word to see if any of the letters match
//if the letter matches, replace the placeholder with that letter
//if letter does not match, draw body part on the canvas
//function that draws out the hangman 
 	//circle
	//line x 5
//if user guesses word before 6 body parts are drawn
//display “YOU WIN” 
//If all 6 body parts are drawn before user guesses word
//display “YOU LOSE”  

