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
  $('.mambaContainer').click(function() {
    $(this).toggleClass('active');
  });
  $("form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    $("#resultText").append(`<p>${numberRange(input)}</p>`);
    if (input === 8 || input === 24) {
      $("#mamba").show();
      $("#reveal").show();
    } else {
      $("#mamba").hide();
    }
  });
});