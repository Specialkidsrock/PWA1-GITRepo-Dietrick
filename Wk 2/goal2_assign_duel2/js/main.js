/*
 Name: Terry Dietrick
 Date: 15 Feb 2015
 Class & Section:  PWA1-Sec 01
 Comments: "Goal 2 Duel 2"
 */

// self-executing function

(function(){
    console.log("Fight!!!");                               //Writes out a message to the console in the browser to verify js source functionality with html file

    //player name
    var playerOnes = ["Superman", 30, 100];                 //Array to store player 1 name, damage and health
    var playerTwos = ["Doomsday", 30, 100];                 //Array to store player 2 name, damage and health

    //var playerOneName = "Superman";                         //Variable assigned the name "Superman"
    //var playerTwoName = "DoomsDay";                         //Variable assigned the name "Doomsday"

    //player damage
    //var player1Damage = 30;                                 //Variable assigned to player1 as maximum damage it can incur on the other player each round
    //var player2Damage = 30;                                 //Variable assigned to player2 as maximum damage it can incur on the other player each round

    //player health                                             //commented out week 1 code
    //var playerOneHealth = 100;                              //Variable assigned as the starting max health of player 1
    //var playerTwoHealth = 100;                              //Variable assigned as the starting max health of player 2

    var round = 0;                                          //Variable assigned to keep track of the rounds of the fight


    function fight() {                                       //Declares the function that will be used but does not execute until called
        console.log("In the fight function");               //Prints to the console log in order to show the js is

                                                            //An alert that prompts the user the information on the players name and health using string concatenation with global variables

        alert(playerOnes[0] + " : " + playerOnes[2] + " ** START ** " + playerTwos[0] + " : " + playerTwos[2]);

        for (var i = 0; i < 10; i++) {                      //Creates a for loop to increment the round number up to round 10


            var minDamage1 = playerOnes[2] * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player
            var minDamage2 = playerTwos[2] * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player

            var f1 = Math.floor(Math.random() * (playerOnes[1] - minDamage1) + minDamage1);     //random formula is - Math.floor(Math.random() * (max - min) + min);
            var f2 = Math.floor(Math.random() * (playerTwos[1] - minDamage2) + minDamage2);     //math.random generates a decimal number between 0 an 1
                                                                                                //(max - min) + min then is used to generate a number between the min and max and the math.floor rounds it to an integer
            //console.log(f1);                              //prints to the console to verify the random numbers are being generated //commented out week 1 code
            //console.log(f2);                              //prints to the console to verify the random numbers are being generated //commented out week 1 code

            //inflict damage
            playerOnes[2] -= f1;                          //subtracts the random damage number from the player 1 health (same as playerOneHealth = playerOneHealth - f1)
            playerTwos[2] -= f2;                          //subtracts the random damage number from the player 1 health (same as playerOneHealth = playerOneHealth - f1)

            //console.log(playerOneHealth);                 //commented out week 1 code
            //console.log(playerTwoHealth);                 //commented out week 1 code

            //console.log(playerOneName + " : " + playerOneHealth + "  " + playerTwoName + " : " + playerTwoHealth);


            var results = winnerCheck();                                  //calls for the winnerCheck function to begin
            console.log(results);

            if(results === "no winner"){                                 //conditional to check and see if no winner has been found
                round ++;                                                //increments the round by 1
                alert(playerOnes[0] + " : " + playerOnes[2] + " Round : " + round + " OVER " + playerTwos[0] + " : " + playerTwos[2]);      //prompts the user the current player health and round number
            }else{
                alert(results);                             //displays the winner in a prompt to the user if there is one
                break;                                      //breaks out of for loop and exits the js
            }


        }
    };

    function winnerCheck(){
        console.log("in winner check function");          //testing to ensure the function winner check was working

        var results = "no winner";                          //declares the variable and gives it the string value of no winner

        if(playerOnes[2] < 1 && playerTwos[2] < 1){     //conditional to heck and see if either players health is less then 1
            results = "You both Die!"

        }else if(playerOnes[2] < 1){                      //conditional to check and see if player 1's health is less then 1 resulting in player 2 winning
            results = playerOnes[0] + " Wins!!! "

        }else if(playerTwos[2] < 1){                      //conditional to check and see if player 2's health is less then 1 resulting in player 1 winning
            results = playerOnes[0] + " Wins!!! "
        };

        return results;

    };


    /******* The program starts below with the fight function *******/

    console.log("Program starts here");
    fight(); //execute the fight function call


})();