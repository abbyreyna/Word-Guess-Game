window.addEventListener("DOMContentLoaded", function(){


$(document).ready(function() {

    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var word; //word to guess
    var winCounter; //# of times user guessed the word correctly
    var guessCounter; //# of guesses remaining for the user
    var space; //spaces in a word

    //get elements
    var showWins = getElementByID("wins"); //stored wins
    var showGuessesRemaining = getElementByID("userGuesses");
    var showLettersGuessed = getElementByID("lettersGuessed"); //letters the user has guessed

    //alphabet
    for (var i = 0; i < letters.length; i++)
});

});