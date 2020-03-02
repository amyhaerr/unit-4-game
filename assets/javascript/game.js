//Worked with my study group on writing this 

$(document).ready(function () {

    // set variable to target random number

    var targetRanNumber = Math.floor(Math.random() * 102 + 19)
    console.log(targetRanNumber)


    // counters of wins/losses
    var counter = 0;
    console.log(counter)
    var wins = 0;
    console.log(wins);
    var losses = 0;
    console.log(losses);

    //shows random number on HTML 
    $("#random-number").append(targetRanNumber).css("text-align", "center");

    // shows wins/losses on HTML
    $('#wins-text').append(wins);
    $('#losses-text').append(losses);
    $('#total-score').append(counter);


    // expand our array to include 4 random numbers

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
    console.log(crystals)
    crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
    crystals.crystal4.value = Math.floor(Math.random() * 12 + 1);

    // Reset Game

    function reset() {
        var targetRanNumber = Math.floor(Math.random() * 102 + 19);
        $("#random-number").text(targetRanNumber).css("text-align", "center");
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

        };
        crystals.crystal1.value = Math.floor(Math.random() * 12 + 1);
        crystals.crystal2.value = Math.floor(Math.random() * 12 + 1);
        crystals.crystal3.value = Math.floor(Math.random() * 12 + 1);
        crystals.crystal4.value = Math.floor(Math.random() * 12 + 1);
        var counter = 0;
        $("#total-score").append(counter).css("text-align", "center");
    };


    // Count hidden numbers under crystals
    $("#white").on("click", function() {
        counter = counter + crystals.crystal1.value;
        $("#total-score").text(counter);
    });

    $("#blue").on("click", function() {
        counter = counter + crystals.crystal2.value;
        $("#total-score").text(counter);
    });

    $("#yellow").on("click", function() {
        counter = counter + crystals.crystal3.value;
        $("#total-score").text(counter);
    });

    $("#green").on("click", function() {
        counter = counter + crystals.crystal4.value;
        $("#total-score").text(counter);
    });



    // check if player won/lost
    var checkScore = function () {
        if (counter > targetRanNumber) {
            alert("Please play again!");

        }
    }

    // for (var i in crystals) {
    //     var imgCrystalOne = $("<img>"); 
    //     var imgCrystalTwo = $("<img>"); 
    //     var imgCrystalThree = $("<img>"); 
    //     var imgCrystalFour = $("<img>"); 

    // }

});