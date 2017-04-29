//Start the game with Click event that tells rules of the game and populated the guess field



$("#start").on("click", function() {


    this.innerHTML = "There are 7 parts to a man: 2 arms for shootin, 2 legs fer runnin, 1 body from his Maker, a head to hang low, and a hat to keep his dignity. 7 tries till you get hung out to dry.  "

});



//Create Array of words


var dict = ["MARE", "DUEL", "GOLDRUSH", "QUARTZ", "SHOTGUN", "PYRITE", "GOLDMINE", "PISTOL", "WYOMING", "CAVERN", "COWGIRL", "STOCKADE", "WILD"];


//CREATE A RANDOMIZED WAY TO CHOOSE AN INDEX

var i = Math.floor(Math.random() * dict.length)

//create variables for the word chosen, a new array made of the word's letters, and array made of guessed letters, and an array made of successful guesses

var word = dict[i];

var wordArray = [];

var guessArray = [];

var goodGuess = [];

//create a loop that iterates through every index of the word itself and do several things:
//push each letter into an array holding them like separate string items
//create a paragraph element for each letter and give it the class "placeholder" and push text (underscore) into each new p 

for (count = 0; count < word.length; count += 1) {


    wordArray.push(word.charAt(count));


    var letterHolder = $("<p>");


    letterHolder.addClass("placeholder")


    letterHolder.text(wordArray[count]);


    // $(".compGuess").append(" _ ");    ---->   if all else fails use this

}

    var wins = 0;
    var lossCounter = 7;

//when a key is clicked in the input field it does several things
//the event is stored as a variable
//a new variable is created that makes it upper case
//each letter is pushed into a brand new array that holds all the guesses

document.onkeyup = function(event) {

    var userGuess = event.key;
    var letter = userGuess.toUpperCase();
    guessArray.push(letter);

//a test is performed to see if the letter is even in the array of letters for the computer's word
//this is tested by seeing if indexOf returns -1
//if it doesn't return -1, that means it's in the word and scores a win & affirmations are given to user
//or else it records a loss, which is a countdown from 7--the established number in the beginning & warnings are issued to user

    if (wordArray.indexOf(guessArray[guessArray.length - 1]) != -1) {

                $("#start").html("You got somethin' right!!");

                wins++;
                goodGuess.push(letter);

                //inside this condition we must see if we've reached maximum goodnes by comparing good guesses string to the word array indices

                function winTest() {

                        if (goodGuess.length === word.length) {

                        $("#start").html("You won!! Your word was " + word + ".");

                        }
                    }

                winTest();
    } 

    if (wordArray.indexOf(guessArray[guessArray.length - 1]) == -1) {

        $("#start").html("Yer one step closer to yer maker");

     lossCounter--;

//inside this condition we must see if we've reached maximum losses by comparing countDown number to 7, our starting point

                    function lossTest() {

                        if (lossCounter == 0) {

                        $("#start").html("Yer hanged, man!");

                        }

                    }

        lossTest();

    }

}


    







   

    















