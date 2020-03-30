$(document).ready(function() {
  $("#form0ne").submit(function(event) {
    event.preventDefault();
    var blanks = ["adjective1", "animal", "adjective2", "name", "adjective3", "adjective4", "adjective5", "adjective6", "verb1", "verb2", "noun", "verb3", "verb4", "person"]
    //var adjective1Input = $("input#adjective1").val();
    //var animalInput = $("input#animal").val();
    //var adjective2Input = $("input#adjective2").val();
    //var nameInput = $("input#name").val();
    //var adjective3Input = $("input#adjective3").val();
    //var adjective4Input = $("input#adjective4").val();
    //var adjective5Input = $("input#adjective5").val();
    //var adjective6Input = $("input#adjective6").val();
    //var verb1Input = $("input#verb1").val();
    //var verb2Input = $("input#verb2").val();
    //var nounInput = $("input#noun").val();
    //var verb3Input = $("input#verb3").val();
    //var verb4Input = $("input#verb4").val();
    //var personInput = $("input#person").val();

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    })
    

    /*
    $(".adjective1").text(adjective1Input); 
    $(".animal").text(animalInput);
    $(".adjective2").text(adjective2Input);
    $(".name").text(nameInput);
    $(".adjective3").text(adjective3Input);
    $(".adjective4").text(adjective4Input);
    $(".adjective5").text(adjective5Input);
    $(".adjective6").text(adjective6Input);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".noun").text(nounInput);
    $(".verb3").text(verb3Input);
    $(".verb4").text(verb4Input);
    $(".person").text(personInput);
    */

    $("#story").show();

    
  });
});