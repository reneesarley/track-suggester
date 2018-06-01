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
    var currentAs
    var currentBs
    var currentCs
    var rubyYesClass
    var rubyNoClass
    currentValString = currentValString + $(this).val();
    alert(currentValString);
    //get letter counts
    currentAs = currentValString.split("a").length - 1;
    currentBs = currentValString.split("b").length - 1;
    currentCs = currentValString.split("c").length - 1;
    alert("a: " + currentAs + " b: " + currentBs + " c: " + currentCs);
    //add letter value to class var
    rubyYesClass = "col-md-" + currentAs;
    rubyNoClass = "col-md-" + (10-currentAs);
    alert(rubyYesClass);
    alert(rubyNoClass);
    //update class list for


  });


});
