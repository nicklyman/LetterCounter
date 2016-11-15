//business logic

var letters = function(submittedText) {
  for (var i = 0; i <= submittedText.length; i++) {
    if (i >= 0) {
      $(".output").append("<ul>" + (submittedText[i]) + "</ul>")
    }
  }
}



//user interface logic

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var submittedText = $("input#value").val();
    console.log(submittedText);
    var output = letters(submittedText);

    $(".output").show();
  });
});