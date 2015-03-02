/*
 Name: Terry Dietrick
 Date: 22 Feb 2015
 Class & Section:  PWA1-Sec 01
 Comments: "Goal 4 Duel 3"
 */

// self-executing function

(function(){
    console.log("Fight!!!");                               //Writes out a message to the console in the browser to verify js source functionality with html file


    var fighter1 = {                                       //object to hold fighter1 information
        name: "Superman",
        damage: 30,
        health: 100
    };

    var fighter2 = {                                       //object to hold fighter 2 information
        name: "Doomsday",
        damage: 30,
        health: 100
    };

    var round = 0;                                          //Variable assigned to keep track of the rounds of the fight


    var fightButton = document.getElementsByClassName("buttonblue");
    fightButton.onclick = console.log("The click works");






    //function fight() {                                       //Declares the function that will be used but does not execute until called
    //    console.log("In the fight function");               //Prints to the console log in order to show the js is
    //
    //                                                        //An alert that prompts the user the information on the players name and health using string concatenation with global variables
    //
    //    //alert(fighter1.name + " : " + fighter1.health + " ** START ** " + fighter2.name + " : " + fighter2.health);
    //
    //    for (var i = 0; i < 10; i++) {                      //Creates a for loop to increment the round number up to round 10
    //
    //
    //        var minDamage1 = fighter1.health * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player
    //        var minDamage2 = fighter1.health * .5;            //Creates a variable that defines minimum damage that can be incurred to the other player
    //
    //        var f1 = Math.floor(Math.random() * (fighter1.damage - minDamage1) + minDamage1);     //random formula is - Math.floor(Math.random() * (max - min) + min);
    //        var f2 = Math.floor(Math.random() * (fighter2.damage - minDamage2) + minDamage2);     //math.random generates a decimal number between 0 an 1
    //                                                                                            //(max - min) + min then is used to generate a number between the min and max and the math.floor rounds it to an integer
    //
    //        //inflict damage
    //        fighter1.health -= f1;                          //subtracts the random damage number from the player 1 health (same as playerOneHealth = playerOneHealth - f1)
    //        fighter2.health -= f2;                          //subtracts the random damage number from the player 1 health (same as playerOneHealth = playerOneHealth - f1)
    //
    //
    //
    //        var results = winnerCheck();                                  //calls for the winnerCheck function to begin
    //        console.log(results);
    //
    //        if(results === "no winner"){                                 //conditional to check and see if no winner has been found
    //            round ++;                                                //increments the round by 1
    //            alert(fighter1.name + " : " + fighter1.health + " Round : " + round + " OVER " + fighter2.name + " : " + fighter2.health);      //prompts the user the current player health and round number
    //        }else{
    //            alert(results);                             //displays the winner in a prompt to the user if there is one
    //            break;                                      //breaks out of for loop and exits the js
    //        }
    //
    //
    //    }
    //};

    function winnerCheck(){
        console.log("in winner check function");          //testing to ensure the function winner check was working

        var results = "no winner";                          //declares the variable and gives it the string value of no winner

        if(fighter1.health < 1 && fighter2.health < 1){     //conditional to heck and see if either players health is less then 1
            results = "You both Die!"

        }else if(fighter1.health < 1){                      //conditional to check and see if player 1's health is less then 1 resulting in player 2 winning
            results = fighter1.name + " Wins!!! "

        }else if(fighter2.health < 1){                      //conditional to check and see if player 2's health is less then 1 resulting in player 1 winning
            results = fighter1.name + " Wins!!! "
        };

        return results;

    };


    /******* The program starts below with the fight function *******/

    console.log("Program starts here");
    fightButton.onclick = fight(); //execute the fight function call


})();