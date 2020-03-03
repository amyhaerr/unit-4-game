//Worked with my study group on writing this: Kortnie Heidel, Brooke Guarienti,
// John Pendergrass, and Haylee McLemore 

$(document).ready(function () {

    
   // variables 
   var counter = 0;
   var wins = 0;
   var losses = 0;
   var targetRanNumber = 0;  
   var crystals = {
       crystal1: {
           value: 0,
       },
       crystal2: {
           value: 0,
       },
       crystal3: {
           value: 0,
       },
       crystal4: {
           value: 0,
       },
   }

//    function to start 

function gameStart() {
    targetRanNumber = Math.floor(Math.random() * 102 + 19);
    crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal4.value = Math.floor(Math.random() * 12 + 1);

    counter = 0;

     //shows random number on HTML 
     $("#random-number").text(targetRanNumber).css("text-align", "center");

     // shows wins/losses on HTML
     $('#wins-text').text(wins).css("text-align", "center");
     $('#losses-text').text(losses).css("text-align", "center");
     $('#total-score').text(counter).css("text-align", "center");
}

  
  function scores() {

        if (counter > targetRanNumber) {
            alert("You lost. Please play again!");
        losses++;

        $("losses-text").text(losses);
        gameStart ();

        }
        else if (counter == targetRanNumber){
            alert("You've won!");
            wins++;

            $("wins-text").text(wins);
            gameStart ();
        }
    }
  

gameStart ();
    // Count hidden numbers under crystals
    $("#white").on("click", function() {
         counter += crystals.crystal1.value;
        $("#total-score").text(counter);
        scores();
    });

    $("#blue").on("click", function() {
         counter += crystals.crystal2.value;
        $("#total-score").text(counter);
        scores();
    });

    $("#yellow").on("click", function() {
         counter += crystals.crystal3.value;
        $("#total-score").text(counter);
        scores();
    });

    $("#green").on("click", function() {
         counter += crystals.crystal4.value;
        $("#total-score").text(counter);
        scores();
    });


});