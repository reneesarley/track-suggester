$(function(){

  var currentValString = ""

  $("#resetButton").click(function() {
    $(".trackForm").trigger("reset");
    $(".no").attr('class', "col-xs-10 no");
    $(".yes").attr('class', "yes hidden");
    $("input").attr("disabled", false);
    currentValString = ""
  });

  //on click function for any input
  $("input").click(function(){
    var rubyCurrent
    var cssCurrent
    var cSharpCurrent
    var parentId = $(this).attr("name");
    $("#" + parentId + " input").attr("disabled", true);
    function updateClasses(trackName){
      if(eval(trackName + "Current") > 0 && eval(trackName + "Current") <10 ){
        var yesCol = "col-xs-" + eval(trackName + "Current");
        var noCol = "col-xs-" + (10- eval(trackName + "Current"));
        $("#" + trackName + "Yes").attr('class', yesCol + " yes");
        $("#" + trackName + "No").attr('class', noCol + " no");
      }else if(eval(trackName + "Current") === 10){
        yesCol = "col-xs-" + eval(trackName + "Current");
        $("#" + trackName + "Yes").attr('class', yesCol + " yes");
        $("#" + trackName + "No").attr('class', "hidden no");
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
    updateClasses("ruby");
    updateClasses("css");
    updateClasses("cSharp");
  });

});
