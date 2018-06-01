$(function(){


  $("#resetButton").click(function() {
    $(".ourForm").trigger("reset");
  });

  $("#trackForm").submit(function(event) {
    alert("submit button is working");

    event.preventDefault();
  });


    var currentValString = ""
    function updateClasses(){};


  //on click function for any input
  $("input").click(function(){
    var currentAs
    var currentBs
    var currentCs
    var rubyYesCol
    var rubyNoCol
    var cssYesCol
    var cssNoCol
    function updateClasses(current, yesCol, noCol, trackName){
      alert("this function is working" + current);
      if(current > 0){
        yesCol = "col-xs-" + current;
        noCol = "col-xs-" + (10-current);
        $("#" + trackName + "Yes").attr('class', yesCol);
        $("#" + trackName + "No").attr('class', noCol);
        alert(trackName + " classes updated")
      }else{
        alert("no updates" + trackName);
        }
    };
    currentValString = currentValString + $(this).val();
    alert(currentValString);
    //get letter counts
    currentAs = currentValString.split("a").length - 1;
    currentBs = currentValString.split("b").length - 1;
    currentCs = currentValString.split("c").length - 1;
    alert("a: " + currentAs + " b: " + currentBs + " c: " + currentCs);
    //add letter value to class var
    cssYesCol = "col-xs-" + currentBs;
    cssNoCol = "col-xs-" + (10-currentBs);
    updateClasses(currentAs, rubyYesCol, rubyNoCol, "ruby");
    //add letter value to class var and class list for tracks if currentCount over 0
    // if(currentAs > 0){
    //   rubyYesCol = "col-xs-" + currentAs;
    //   rubyNoCol = "col-xs-" + (10-currentAs);
    //   $("#rubyYes").attr('class', rubyYesCol);
    //   $("#rubyNo").attr('class', rubyNoCol);
    // }else{
    //   alert("no updates to As");
    //   }
    // if(currentBs > 0){
    //   cssYesCol = "col-xs-" + currentBs;
    //   cssNoCol = "col-xs-" + (10-currentBs);
    //   $("#cssYes").attr('class', cssYesCol);
    //   $("#cssNo").attr('class', cssNoCol);
    // }else{
    //   alert("no updates to Bs");
    //   }

  });

});
