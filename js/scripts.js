$(function(){


  $("#resetButton").click(function() {
    $(".trackForm").trigger("reset");
    $(".no").attr('class', "col-md-10 no");
    $(".yes").attr('class', "hidden yes");

  });

  var currentValString = ""

  //on click function for any input
  $("input").click(function(){
    var rubyCurrent
    var currentBs
    var currentCs
    var rubyYesCol
    var rubyNoCol
    var cssYesCol
    var cssNoCol
    var parentId = $(this).attr("name");
    $("#" + parentId + " input").attr("disabled", true);
    function updateClasses(yesCol, noCol, trackName){
      if(eval(trackName + "Current") > 0){
        yesCol = "col-xs-" + eval(trackName + "Current");
        noCol = "col-xs-" + (10- eval(trackName + "Current"));
        $("#" + trackName + "Yes").attr('class', yesCol + " yes");
        $("#" + trackName + "No").attr('class', noCol + " no");
      }else{
        yesCol = yesCol;
        noCol = noCol;
        }
    };
    currentValString = currentValString + $(this).val();
    alert(currentValString);
    //get letter counts
    rubyCurrent = currentValString.split("a").length - 1;
    cssCurrent = currentValString.split("b").length - 1;
    cSharpCurrent = currentValString.split("c").length - 1;
    alert("a: " + rubyCurrent + " b: " + cssCurrent + " c: " + cSharpCurrent);
    //add letter value to class var
    updateClasses(rubyYesCol, rubyNoCol, "ruby");
    updateClasses(cssYesCol, cssNoCol, "css");
  });

});
