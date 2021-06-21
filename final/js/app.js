function setup() {
    createCanvas (320,320);
}

function draw() {
    background(0, 255, 255);
    stroke(10);
    line(300,300, 0, 300);
    line(300, 0, 300, 300);
    line(150, 0, 150, 90);
}

var B
    ,L
    ,placeholder 
    ,correctGuesses
    ,wrongGuesses
    ,wordToGuess
    ,wordLength
    ,words=[]
    ,wrongletter=true;

    function drawBody() {
        circle(150,100,30)
    }

    function newGame()
    {
      //initialize all the variables
      placeholder=[];  /////////initialize placeholder as an array\\\\\\\\\\\
      correctGuesses=0;
      wrongGuesses=0;
      wordToGuess=chooseWord();
      wordLength=wordToGuess.length;
      
      //make a loop that replaces underscores with the word to be guessed
      for(var i=0;i<wordLength;i++)
      {
      	placeholder[i] = "_ ";  /////////instead of concatinating string add '_' to placeholder array\\\\\\\\\\\
      }
       document.getElementById("keyboard").innerHTML=placeholder.join("");
      
      //loop to make a keyboard of buttons 
      //B hold the buttons
     B = '';
    //L hold letters
     L;
    //this loop to get the letters by charcode
    for (var i = 65; 90 >= i; i++) {// A-65, Z-90
      L = String.fromCharCode(i);
      B += '<button id="'+L+'" onclick="getLetter(\''+L+'\');">' + L + '</button>';  /////////button id should be unique. So give each button with letter as id \\\\\\\\\\\
    }
    document.getElementById("box1").innerHTML = B;
        // drawBody ()
    }
    
    
    function getLetter(x)
    {
       document.getElementById(x).disabled = true;  /////////disable button that clicked\\\\\\\\\\\
       checkLetter(x);
    }
    function checkLetter(letter)
    {
      wrongletter=true;
    	document.getElementById("keyboard").innerHTML=placeholder;
//        placeholder=placeholder.split(""); /////////no need this since the placeholder is now an array\\\\\\\\\\\
              for(var i=0;i<wordLength;i++)
          { 
          	if(wordToGuess.charAt(i)===letter.toLowerCase())
          	{
               placeholder[i]=letter;
               wrongletter=false;
               correctGuesses++;
          	}
          	if(correctGuesses===wordLength)
          	{
          		//if all letters have been guessed that mean u guessed all the correct letters and u win
          		//call the drawCanvas
          		//drawCanvas();
    
          	}
          }
          	//if ur guess was wrong
    	if(wrongletter)  /////////I think you mistakenly gave the variable name here\\\\\\\\\\\
    	{
    		wrongGuesses++; 
            circle(150,100,30);
        
    	} 
    	document.getElementById("keyboard").innerHTML=placeholder.join("");
        
      
    }
function chooseWord()
{
	//create an array of ten words
	var words=["hello","stephanie", "kittens", "rain", "music", "unicorn", "cheese", "bears", "pink", "rainbow"];
	//choose a word at random to play hangman
	return words[parseInt(Math.random()*words.length)];
}

