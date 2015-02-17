// Create privatized scope using a self-executing function
(function(){                                                                // self executing function meant to execute what's in parenthesis immediately
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results");                    //declares resultsDiv as a variable and assigns it the value from "results" and the line should end with a semi colon
		searchInput = document.forms[0].search;                             //the searchInput function is given the value of document index 0, the .search should be .submit and the line should end with a semi colon as well as start with "var"
		currentSearch = '';                                                 //currentSearch variable not declared using the "var" and the line doesn't end with a semi colon;
	
	// Validates search query

    console.log("console log part 1");

	var validate = function(query){                                       //variable validate spelled incorrectly, and this variable is assigned the value of the function result

		// Trim whitespace from start and end of search query
		while(query.charAt(0) == " "){                                      //starts a while loop for the query function using the .charat method which returns the first letter of the string
			query = query.substring(1, query.length);                      //returns the extracted character in that position from the string, and the length as a number.
		};

		while(query.charAt(query.length-1) === "") {                        //while loop that uses the .charat method and .length - 1 to see how long the entered search string is
            query = query.substring(0, query.length - 1);
        };

		// Check search length, must have 3 characters
		if(query.length < 3){                                               //if statement that checks the query length is less then 3 characters
			alert("Your search query is too small, try again.");
                                                                            //the line above is missing a quotation and prompts the user using the alert feature that their search entry is too short
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                            //sets the focus on the searchInput box for the user
			return;                                                         //returns the result of the function
		};

		search(query);                                                      //calls the function
	    console.log("console log part 2 function query");
    };
	
	// Finds search matches
	var search = function(query){                                            //declares the variable search with the value of the function query missing closing semi colon
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");                                  //declares the array, and sets the users entered string items into an array
		
		// array to store matched results from database.js
		var results = [];                                                  //creates the results array

		// loop through each index of db array
		for(var i = 0, j = db.length; i < j; i ++) {                               //for loop that loops through the index of the database array

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');                           //var dbTitleEnd that is assigned the value of the db index value i (a video item)
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);     //assigns the var dbitem(not camelcase) the value of the current db index # and converts it to lower case from the 0 position of the string to the end

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {              //for loop that assigns the variable ii to 0 and jj the array length in a numeric value. if ii < jj it
                var qitem = queryArray[ii].tolowercase();                  //stores the ii variable (keyword) into the queryarray as lowercase in the qitem variable

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);                    //variable compare to compare if the
                if (compare !== -1) {
                    results.push(db[i]);                                //adds new item to the end of the variable and returns the length
                }
                ;
            };

        };
		
		results.sort();                                                 //sorts the results array alphabetically
		
		// Check that matches were found, and run output functions
		if(results.length = 0){                                         //if the results array length method results in zero then it calls the function no match
			noMatch();
		}else{                                                          //else the length of the array is longer then zero it calls the show matches function
			showMatches(results);
		};
        console.log("Console log part 3 var search function");
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                           //function called no match that displays no results found
		var html = ''+                                                  //var html to show the inner html to include the messages on the following lines
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;                                    //div container containing the js results of the function
	    console.log("console log 4 var no match");
    };
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){                              //show matches function
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',                                  //inner html
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
        console.log("console log part 5 var showmatches");
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {                        //onsbumit or when the users clicks the submit button
        var query = searchInput.value;
        validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;                                               //prevents the form from being submitted
    };

})();