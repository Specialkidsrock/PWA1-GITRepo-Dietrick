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

        alert(playerOneName + " : " + playerOneHealth + " ** START ** " + playerTwoName + " : " + playerTwoHealth);

        for (var i = 0; i < 10; i++) {                      //Creates a for loop to increment the round number up to round 10


            var minDamage1 = player1Damage * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player
            var minDamage2 = player2Damage * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player

            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);     //random formula is - Math.floor(Math.random() * (max - min) + min);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);     //math.random generates a decimal number between 0 an 1
                                                                                                //(max - min) + min then is used to generate a number between the min and max and the math.floor rounds it to an integer
            //console.log(f1);                              //prints to the console to verify the random numbers are being generated
            //console.log(f2);                              //prints to the console to verify the random numbers are being generated

            //inflict damage
            playerOneHealth -= f1;                          //subtracts the random damage number from the player 1 health (same as playerOneHealth = playerOneHealth - f1)
            playerTwoHealth -= f2;                          //subtracts the random damage number from the player 1 health (same as playerOneHealth = playerOneHealth - f1)

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //console.log(playerOneName + " : " + playerOneHealth + "  " + playerTwoName + " : " + playerTwoHealth);


            var results = winnerCheck();                                  //calls for the winnerCheck function to begin
            console.log(results);

            if(results === "no winner"){                                 //conditional to check and see if no winner has been found
                round ++;                                                //increments the round by 1
                alert(playerOneName + " : " + playerOneHealth + " Round : " + round + " OVER " + playerTwoName + " : " + playerTwoHealth);      //prompts the user the current player health and round number
            }else{
                alert(results);                             //displays the winner in a prompt to the user if there is one
                break;                                      //breaks out of for loop and exits the js
            }


        }
    };

    function winnerCheck(){
        //console.log("in winner check function");          //testing to ensure the function winner check was working

        var results = "no winner";

        if(playerOneHealth < 1 && playerTwoHealth < 1){     //conditional to heck and see if either players health is less then 1
            results = "You both Die!"

        }else if(playerOneHealth < 1){                      //conditional to check and see if player 1's health is less then 1 resulting in player 2 winning
            results = playerTwoName + " Wins!!! "

        }else if(playerTwoHealth < 1){                      //conditional to check and see if player 2's health is less then 1 resulting in player 1 winning
            results = playerTwoName + " Wins!!! "
        };

        return results;

    };


    /******* The program starts below with the fight function *******/

    console.log("Program starts here");
    fight(); //execute the fight function call


})();