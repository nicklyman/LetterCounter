//business logic

var userString = function(submittedText) { //Get user submitted text
  for (var i = 0; i < submittedText.length; i++) { //Loop through the text
    if (i >= 0) {
      $(".output").append("<ul>" + (submittedText[i]) + "</ul>") //List out letters on index.html
      console.log(submittedText[i]);
    };
  };
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