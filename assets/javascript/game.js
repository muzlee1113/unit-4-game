//Global variables
var gemNum1 = 0;
var gemNum2 = 0;
var gemNum3 = 0;
var gemNum4 = 0;
var targetVal = 0;
var total = 0;
var wins = 0;
var losses = 0;
var guesses = 0;
var gameStarter = false;
var minGuesses = 0;

$(document).ready(function () {


    //create a click handler for the start button
    $("#start").on("click", function () {
        allReset()
        random()
        $("#win-lose").html("Let's go!");
    })
   
   
   
    //random function
   function random() {
        //create a function that generate random target value
        targetVal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        //create a function that generate random gem values
        gemNum1 = Math.floor(Math.random() * 12 + 1);
        gemNum2 = Math.floor(Math.random() * 12 + 1);
        gemNum3 = Math.floor(Math.random() * 12 + 1);
        gemNum4 = Math.floor(Math.random() * 12 + 1);
        //reRender the display
        reRender()
      
    }
    //all reset function
    function allReset() {
        //start the game starter
        gameStarter = true;
        //clean up the screen and the rom
        total = 0;
        guesses = 0;
        wins = 0;
        losses = 0;
        minGuesses = 0;
        ;
}
    //reset function
    function reset() {
            //start the game starter
            gameStarter = true;
            //clean up the screen and the rom
            total = 0;
            guesses = 0;
    }

    //create a reRender function for all the diplays
    function reRender() {
        $("#targetval").text(targetVal);
        $("#total").text(total);
        $("#guesses").text(guesses);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#minGuesses").text("The Least Digs:" + minGuesses);
    }


    //create click handlers for the gems
    $("#gem1").on("click", function () {
        if(gameStarter === true) {
            total = total + gemNum1;
            guesses = guesses + 1;
            check()
            reRender();
        }
    })
    $("#gem2").on("click", function () {
        if(gameStarter === true) {
            total = total + gemNum2;
            guesses = guesses + 1;
            check()
            reRender()
        }
    })
    $("#gem3").on("click", function () {
        if(gameStarter === true) {
            total = total + gemNum3;
            guesses = guesses + 1;
            check()
            reRender()
        }
    })
    $("#gem4").on("click", function () {
        if(gameStarter === true) {
            total = total + gemNum4;
            guesses = guesses + 1;
            check()
            reRender()
        }
    })
    //create a function to check the if the player wins
    function check() {
        if(total === targetVal){
            wins = wins + 1;
            $("#win-lose").html("You Win! Next!");
            gameStarter = false;
                if(minGuesses === 0) {
                    minGuesses = guesses
                } else if (guesses < minGuesses) {
                    minGuesses = guesses
                }
            reset();
            random();
        } else if(total > targetVal){
            losses = losses + 1
            $("#win-lose").html("You Lose! Next!");
            gameStarter = false;
            reset();
            random();
        }
    
    } 
})
