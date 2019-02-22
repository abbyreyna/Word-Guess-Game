//variables

var winsCounter = 0;
var lossesCounter = 0;
var guessCounter = 10;
var lettersGuessed = [];
var userGuess = [];
var wordToGuess = ""; 

//list of words to be randomly generated
var wordList = ["stealth", "clone", "diana", "assassin"];

//this function allows for the html counts to be populated
var writeToPage = function() {
  document.getElementById("wins").textContent = winsCounter;
  document.getElementById("losses").textContent = lossesCounter;
  document.getElementById("remaining").textContent = guessCounter;
  document.getElementById("guessed").textContent = lettersGuessed;
  document.getElementById("result").textContent = userGuess;
};


var letterCheck = function(letter) {
  var letterInWord = false;

  for(var i = 0; i < wordToGuess.length; i++) {
    if (letter === wordToGuess[i]) {
      letterInWord = true;
      userGuess[i] = wordToGuess[i];
    }
  }
};

var roundOver = function(letter) {
  letterCheck(letter);

  //the guess counter goes down by each guess; I unfortunately couldn't figure out how to populate only the wrong guesses
  //I needed to filter out the correct guesses
  guessCounter--;

  //due to the guess counter not filtering the correct guesses from the wrong ones, once the guess counter goes to 0, an alert pops up letting the user know that the game is over
  if (guessCounter === 0) {
    lossesCounter++;
    alert('GAME OVER');
  }
 //my next step would have been to alert the user of them winning the game once the word had been guessed

  writeToPage();
};


document.onkeyup = function(event) {
  if (guessCounter > 0) {

    
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      var letter = event.key.toLowerCase();

      lettersGuessed.push(letter);

      roundOver(letter);
    }
  }
};

var startGame = function() {
  winsCounter = 0;
  lossesCounter = 0;
  guessCounter = 10;
  lettersGuessed = [];
  wordToGuess = "";

  //this generates a random word from the word list
  var randomNumber = Math.floor(Math.random() * wordList.length);
  wordToGuess = wordList[randomNumber];

  
  for(var i = 0; i < wordToGuess.length; i++) {
    userGuess.push('_');
  }

  writeToPage();
};

startGame();


