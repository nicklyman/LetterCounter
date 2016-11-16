//business logic

var userString = function(submittedText) { //Get user submitted text
  var letterCount = {}; //Create new empty object
    for (var i = 0; i < submittedText.length; i++) { //Loop through each character in user submitted text
    var letter = submittedText.charAt(i); //Looks at each character from submittedText
    if (letterCount[letter]) { //Checks if letter is already part of object
      letterCount[letter]++; //If yes, 1 is added to tally for that letter
    } else {
      letterCount[letter] = 1; //If no, 1 is entered for the tally of that letter
    };
  };
  Object.keys(letterCount).forEach(function(key) { //Loops through each key value pair 
  $(".output").append("<ul>" + (key) + " : " + (letterCount[key]) + "</ul>"); //List out letters and number of occurances on index.html
  });
  return letterCount; //Object is returned
};




//user interface logic

$(document).ready(function() {
  $("form#userInput").submit(function(event) { //User text is submitted from index.html form
    event.preventDefault();

    var submittedText = $("input#value").val().toLowerCase(); //User text from form
    var output = userString(submittedText); //Result of analysis conducted in business logic

    $(".output").show(); //Displays output
  });
});