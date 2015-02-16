/*
 Name: Terry Dietrick
 Date: 14 Feb 2015
 Class & Section:  PWA1-Sec 01
 Comments: "Goal 2 JS practice"
 */

// self-executing function
(function() {

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
     - accept 1 parameter into the function that will be an array of unlimited numbers
     - find the average of all the numbers
     - return the average from the function
     - console.log the answer outside of the function

     2.  create a function named 'fullName'
     - accept 2 parameters into the function that are strings (firstname and lastname)
     - return the name after it has been concatenated
     - console.log the answer outside of the function

     3.  create a function named 'wordCount'
     - accept 1 parameter into the function that is a long string of text words
     - create a function that counts all the words and return the answer
     - console.log the answer outside of the function

     4.  create a function named 'charCount'
     - accept 1 parameter into the function that is a long string of text
     - return length of the array of string characters
     - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
     - accept 1 parameter into the function that is a a one word string
     - return the number of vowels in the word
     - console.log the answer outside of the function

     6.  create a function named 'findNum'
     - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
     - if the second parameter being passed is "false" or null then
     - create an array with all of the odd numbers from
     the array
     - else - create an array with all of the even numbers
     from the array
     - return the array
     - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgArray = [];
    var avgNumbers;
    avgNumbers = function (avgArray) {

        for (var i = 0; i < avgArray.length; i++) {
            var sumArray = parseInt(sumArray + avgNumbers[i]);
            var averageArray = parseInt(sumArray / avgArray.length);
            //return;
        }
    };

    console.log('avg number = ', avgArray[1, 2, 3, 4, 5]);
    //avgNumbers(10);

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    function fullName(firstName, lastName) {
        var displayName = (firstName + " " + lastName);
        return displayName;
    }

    console.log(fullName('James', 'Bond'));


    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function awesome";

    function wordCount(longString) {
        var counts = 1;
        for (var i = 0; i < longString.length; i++) {
            if (longString.charAt(i) == " ") {
                counts++;
            }
        }
        return counts;
    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

    function charCount(charactersDoCount) {
        var counted = 0;
        for (var i = 0; i < charactersDoCount.length; i++) {
            counted++;
        }
        return counted;
    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    function vowelsInWord(vowels) {
        return --(vowels.split(/[aeiouy]/).length);

    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");


    function findNum(arrayNumbers, booleansRock) {

        //var evenNumbers = 0;
        //var oddNumbers = 0;

        for (var i = 0; i < arrayNumbers[i].length; i++) {

            if (arrayNumbers[i] % 2 == 0) {
                evenNumbers.push(arrayNumbers[i]);
                return arrayNumbers;
            } else (booleansRock = false);
            {
                oddNumbers.push(arrayNumbers[i] % 1);
                return arrayNumbers;
            }
        }
    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();