function numberRange(input) {
  var inputRange = [];

  for (var i=0; i <= input; i++) {
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
    return inputRange
  }


// start user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#numOne").val());
    var inputFive = 5
    var inputThree = 3

    $('body').append(`<div class="outputMargin text-white font-weight-bold"><p>${numberRange(input)}</p></div>`);
    $('body').append(`<div class="outputMargin text-white font-weight-bold"><p>${"The Jackson Five"}</p><img src="img/jacksonfive.jpg" alt="The Jackson Five"/></div>`);
    $('body').append(`<div class="outputMargin text-white font-weight-bold"><p>${"The Answer"}</p><img src="img/ai.jpg" alt="Allen Iverson"/></div>`);
  });
});