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


    function fight(){                                       //Declares the function that will be used but does not execute until called
        console.log("In the fight function");
        winnerCheck()
    };

    function winnerCheck(){
        //code will go here
    };


    /******* The program starts below with the fight function *******/

    console.log("Program starts here");
    fight(); //execute the fight function call


})();