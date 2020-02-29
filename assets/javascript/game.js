$(document).ready(function() {

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
            // image image: ""
        },
        crystalTwo: {
            points: Math.floor(Math.random() * 12 + 1),
            // image image: ""
    },
        crystalThree: {
             points: Math.floor(Math.random() * 12 + 1),
             // image image: ""
    },
        crystalFour: {
             points: Math.floor(Math.random() * 12 + 1),
             // image image: ""
    },

    


})