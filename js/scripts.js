$(function(){


  $("#resetButton").click(function() {
    $(".ourForm").trigger("reset");
  });

  $("#trackForm").submit(function(event) {
    alert("submit button is working");

    event.preventDefault();
  });

    var currentValString = ""
  //on click function for any input
  $("input").click(function(){
    var thisValue
    var currentAs
    thisValue = $(this).val();
    alert(thisValue);
    currentValString = currentValString + thisValue;
    alert(currentValString);
    currentAs = currentValString.split("a").length - 1
    alert(currentAs);


  });


});
