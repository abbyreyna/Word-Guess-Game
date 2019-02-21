var winsCounter = 0;
var lossesCounter = 0;
var guessesCounter = 10;
var lettersGuessed = [];

var chosenWord = ""; // length = same
var userGuess = [];

var wordList = ["stealth", "clone", "diana", "assassin"];

var writeToPage = function() {
  document.getElementById("wins").textContent = winsCounter;
  document.getElementById("losses").textContent = lossesCounter;
  document.getElementById("remaining").textContent = guessesCounter;
  document.getElementById("guessed").textContent = lettersGuessed;
  document.getElementById("result").textContent = userGuess;
};

var checkLetter = function(letter) {
  var letterInWord = false;

  for(var i = 0; i < chosenWord.length; i++) {
    if (letter === chosenWord[i]) {
      letterInWord = true;
      userGuess[i] = chosenWord[i];
    }
  }
};

var roundOver = function(letter) {
  checkLetter(letter);

  guessesCounter--;

  if (guessesCounter === 0) {
    lossesCounter++;
    alert('You lost');
  }

  writeToPage();
};

document.onkeyup = function(event) {
  if (guessesCounter > 0) {

    // only act if it's a letter
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
  guessesCounter = 10;
  lettersGuessed = [];
  chosenWord = "";

  //computer to pick a word
  var randomNumber = Math.floor(Math.random() * wordList.length);
  chosenWord = wordList[randomNumber];

  // convert chosen word to underlines

  for(var i = 0; i < chosenWord.length; i++) {
    userGuess.push('_');
  }

  writeToPage();
};

startGame();

/*

want to track the score

want to have a list of words

let user type a letter

want to check the letter is in the word

if the user guesses the word then they win

if the user runs out of guesses, they lose

*/

