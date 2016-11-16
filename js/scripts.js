//business logic

var userString = function(submittedText) { //Get user submitted text
  var letterCount = {}; //Create new empty object
  $(".output").append("<h3>" + (submittedText) + "</h3>"); //Displays user submission text above list of letters and letter count
  var onlyLetters = submittedText.toUpperCase().split(" ").join("").replace(/[^A-Z]/g, ""); //Keeps only letters in string for analysis
    for (var i = 0; i < onlyLetters.length; i++) { //Loop through each character in user submitted text
    var letter = onlyLetters.charAt(i); //Looks at each character from submittedText
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
    $("ul,h3").empty(); //Clears p tag and ul list after new text is submitted
    event.preventDefault();

    var submittedText = $("input#value").val(); //User text from form converted to upper case and all white space removed
    $("input#value").val(""); //Clears field after submit button
    var output = userString(submittedText); //Result of analysis conducted in business logic

    $(".output").show(); //Displays output
  });
});