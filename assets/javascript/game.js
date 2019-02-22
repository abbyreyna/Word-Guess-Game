var winsCounter = 0;
var lossesCounter = 0;
var guessCounter = 10;
var lettersGuessed = [];
var userGuess = [];
var wordToGuess = ""; 

var wordList = ["stealth", "clone", "diana", "assassin"];

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

  guessCounter--;

  if (guessCounter === 0) {
    lossesCounter++;
    alert('GAME OVER');
  }

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

  var randomNumber = Math.floor(Math.random() * wordList.length);
  wordToGuess = wordList[randomNumber];

  for(var i = 0; i < wordToGuess.length; i++) {
    userGuess.push('_');
  }

  writeToPage();
};

startGame();

