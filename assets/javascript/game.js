//Worked with my study group on writing this 

$(document).ready(function () {

    // set variable to target random number

    var targetRanNumber = Math.floor(Math.random() * 102 + 19)
    console.log(targetRanNumber)

    //shows random number on HTML 
    $("#random-number").text(targetRanNumber);

    var counter = 0;
    console.log(counter)

    // expand our array to include 4 random numbers

    var crystals = {
        crystalOne: {
            points: Math.floor(Math.random() * 12 + 1),
            
        },
        crystalTwo: {
            points: Math.floor(Math.random() * 12 + 1),
            
        },
        crystalThree: {
            points: Math.floor(Math.random() * 12 + 1),
            
        },
        crystalFour: {
            points: Math.floor(Math.random() * 12 + 1),
            
        },
    }

    for (var i in crystals) {
        var imgCrystalOne = $("<img>"); 
        var imgCrystalTwo = $("<img>"); 
        var imgCrystalThree = $("<img>"); 
        var imgCrystalFour = $("<img>"); 

    }

});