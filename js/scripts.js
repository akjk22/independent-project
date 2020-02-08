// defining our function called numberRange, which will pass input as the argument
function numberRange(input) {
  var inputRange = [];
  // inputRange is the name of the array, which will later be pushed as a string of values
  // initialing the for loop and setting its conditions
  for (var i=0; i <= input; i++) {
    // passing the input through the for loop and changing each input to a string
    // each iteration will increment by one and display an output in an array factoring in any specific rules in the if else statement
    if (i.toString().includes("3")) {
        inputRange.push(" I'm sorry, Dave. I'm afraid I can't do that.");
       } else if (i.toString().includes("2")) {
         inputRange.push(" Boop!");
       } else if (i.toString().includes("1")) {
        inputRange.push(" Beep!");
       } else {
         inputRange.push(i);
       }
    } 
    // our function is being called and we are returning the output of values into an empty array defined by inputRange
    return inputRange
  }


// start user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());


    // $("#resultText").append(numberRange(input));
    $("#resultText").append(`<div class="outputMargin text-white font-weight-bold"><p>${numberRange(input)}</p></div>`);
    if (input === 8 || input === 24) {
      $("#mamba").show();
      $("#reveal").show();
    }

    // $("#reveal").click(function(){
    //   $("#flip").slideDown("slow");
    // });
    // $('body').append(`<div class="outputMargin text-white font-weight-bold"><p>${numberRange(input)}</p></div>`);
    // $('body').append(`<div class="outputMargin text-white font-weight-bold"><p>${"The Jackson Five"}</p><img src="img/jacksonfive.jpg" alt="The Jackson Five"/></div>`);
    // $('body').append(`<div class="outputMargin text-white font-weight-bold"><p>${"The Answer"}</p><img src="img/ai.jpg" alt="Allen Iverson"/></div>`);
  });
});