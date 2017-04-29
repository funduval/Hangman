$("#start").on("click", function() {


    this.innerHTML = "There are 7 parts to a man: 2 arms for shootin, 2 legs fer runnin, 1 body from his Maker, a head to hang low, and a hat to keep his dignity. 7 tries till you get hung out to dry.  "

});






var dict = ["ZERO", "MOUNTAIN", "GOLDRUSH", "QUARTZ", "SHOTGUN", "PYRITE", "GOLDMINE", "PISTOL", "WYOMING", "SADDLE", "COWBOY", "STOCKADE", "BARKEEP"];

var i = Math.floor(Math.random() * dict.length)

var word = dict[i];

var wordArray = [];

var guessArray = [];

var goodGuess = [];



for (count = 0; count < word.length; count += 1) {


    wordArray.push(word.charAt(count));


    var letterHolder = $("<p>");


    letterHolder.addClass("placeholder")


    letterHolder.text(wordArray[count]);


    $(".compGuess").append(" _ ");

}




document.onkeyup = function(event) {

    var userGuess = event.key;
    var letter = userGuess.toUpperCase();
    guessArray.push(letter);



    if (wordArray.indexOf(guessArray[guessArray.length - 1]) != -1) {


        $("#start").html("You got somethin' right!!");

        var wins = wins++;
        goodGuess.push(letter);


    } else if (wordArray.indexOf(guessArray[guessArray.length - 1]) == -1) {

        $("#start").html("Yer one step closer to yer maker");

        var losses = losses++;


    } else if (goodGuess.length === word.length) {

        $("#start").html("You won!! Your word was " + word + ".");

    } else {

        $("#start").html("Yer hanged, man!");

    }




}



