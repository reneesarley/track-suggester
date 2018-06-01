$(function(){

  var currentValString = ""

  $("#resetButton").click(function() {
    $(".trackForm").trigger("reset");
    $(".no").attr('class', "col-md-10 no");
    $(".yes").attr('class', "hidden yes");
    $("input").attr("disabled", false);
    currentValString = ""
  });

  //on click function for any input
  $("input").click(function(){
    var rubyCurrent
    var cssCurrent
    var cSharpCurrent
    var rubyYesCol
    var rubyNoCol
    var cssYesCol
    var cssNoCol
    var cSharpYesCol
    var cSharpNoCol
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
    //get letter counts
    rubyCurrent = currentValString.split("a").length - 1;
    cssCurrent = currentValString.split("b").length - 1;
    cSharpCurrent = currentValString.split("c").length - 1;
    //add letter value to class var
    updateClasses(rubyYesCol, rubyNoCol, "ruby");
    updateClasses(cssYesCol, cssNoCol, "css");
    updateClasses(cSharpYesCol, cSharpNoCol, "cSharp");
  });

});
