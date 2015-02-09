/*
 Name: Terry Dietrick
 Date: 08 Feb 2015
 Class & Section:  PWA1-Sec 01
 Comments: "Goal 1 Duel"
 */

// self-executing function

(function(){
    console.log("Fight!!!");                               //Writes out a message to the console in the browser to verify js source functionality with html file

    //player name
    var playerOneName = "Superman";                         //Variable assigned the name "Superman"
    var playerTwoName = "DoomsDay";                         //Variable assigned the name "Doomsday"

    //player damage
    var player1Damage = 30;                                 //Variable assigned to player1 as maximum damage it can incur on the other player each round
    var player2Damage = 30;                                 //Variable assigned to player2 as maximum damage it can incur on the other player each round

    //player health
    var playerOneHealth = 100;                              //Variable assigned as the starting max health of player 1
    var playerTwoHealth = 100;                              //Variable assigned as the starting max health of player 2

    var round = 1;                                          //Variable assigned to keep track of the rounds of the fight


    function fight() {                                       //Declares the function that will be used but does not execute until called
        console.log("In the fight function");               //Prints to the console log in order to show the js is

                                                            //An alert that prompts the user the information on the players name and health using string concatenation with global variables

        alert(playerOneName + ":" + playerOneHealth + " ** START ** " + playerTwoName + ":" + playerTwoHealth);

        for (var i = 0; i < 10; i++) {                      //Creates a for loop to increment the round number up to round 10


            var minDamage1 = player1Damage * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player
            var minDamage2 = player2Damage * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player

            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);     //random formula is - Math.floor(Math.random() * (max - min) + min);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);     //math.random generates a decimal number between 0 an 1
                                                                                                //(max - min) + min then is used to generate a number between the min and max and the math.floor rounds it to an integer
            console.log(f1);
            console.log(f2);
        }
    };

    function winnerCheck(){
        //code will go here
    };


    /******* The program starts below with the fight function *******/

    console.log("Program starts here");
    fight(); //execute the fight function call


})();